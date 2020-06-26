import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./Styles";
import AcceptModal from "./AcceptModal";
import MaskedInput from "react-text-mask";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import { LoginController } from "../../controllers/UserController";

function Login(props, { properties, dispatch }) {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("Preencha os dados corretamente");

	const [openModal, setOpenModal] = useState(false);

	const [mask, setMask] = useState([
		/\d/,
		/\d/,
		/\d/,
		".",
		/\d/,
		/\d/,
		/\d/,
		".",
		/\d/,
		/\d/,
		/\d/,
		"-",
		/\d/,
		/\d/,
		/\d/,
	]);

	useEffect(() => {
		// Atualiza o titulo do documento usando a API do browser
		if (localStorage.getItem("LoginErrorMessage") === null) {
			console.log("");
		} else {
			setMessage(localStorage.getItem("LoginErrorMessage"));
			setErrorMessage(true);
		}
		localStorage.removeItem("LoginErrorMessage");
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<label
						style={
							errorMessage
								? { display: "block" }
								: { display: "none" }
						}
						className={"mb-10 error-message"}
					>
						{message}
					</label>
					<span className="login-header">Informe seu login</span>
					<span className="login-small">CNPJ ou CPF</span>
					<MaskedInput
						mask={mask}
						className="form-control text-input text-input-md"
						placeholder=""
						guide={false}
						type="tel"
						id="login"
						value={login}
						onKeyUp={(e) => formatInput(e.target.value)}
						autoComplete="off"
					/>
					<span className="login-span">Senha</span>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type={"text"}
						className={"key hide-input input-width"}
						maxLength={20}
						placeholder={""}
						autoComplete="off"
					/>
					<button
						onClick={() => handleClickLogin()}
						className={"button__border"}
					>
						<span>Acessar</span>
					</button>
					<NavLink to="/pre-cadastro" className={"link-default"}>
						Ainda não sou cadastrado
					</NavLink>
					<NavLink
						to="/termo-de-uso"
						className={"link-default link-default-mt"}
					>
						Termo de uso
					</NavLink>
				</div>
				<AcceptModal openModal={openModal} />
			</Container>
		</Slide>
	);

	async function handleClickLogin() {
		let loginValue = login.replace(/[.]+/g, "");
		loginValue = loginValue.replace(/[/]+/g, "");
		loginValue = loginValue.replace(/[-]+/g, "");

		if (loginValue.length >= 11) {
			if (password.length >= 6) {
				const loginLabel = {
					login: loginValue,
					senha: password,
				};
				const response = await LoginController(loginLabel);
				handleResponse(response);
			} else {
				handleError("Preencha os dados corretamente");
			}
		} else {
			handleError("Preencha os dados corretamente");
		}
	}

	function handleError(message) {
		setErrorMessage(true);
		setMessage(message);
	}

	function handleResponse(response) {
		switch (response) {
			case "200":
				let UserData = JSON.parse(localStorage.getItem("UserData"));
				if (
					UserData.flaceitecontrato !== "acede" &&
					UserData.flaceitecontrato !== "acefo" &&
					UserData.stusuario === "apr"
				) {
					setOpenModal(false);
					setOpenModal(true);
				} else {
					localStorage.setItem("LoginActualPage", "True");
					if (
						UserData.stusuario === "apr" ||
						UserData.stusuario === "com"
					) {
						document.location.href = "#/menu";
					} else {
						document.location.href = "#/home";
					}
					setTimeout(() => {
						document.location.reload();
					}, 200);
				}
				break;
			case "202":
				handleError(localStorage.getItem("LoginErrorMessage"));
				break;
			case "403":
				handleError(localStorage.getItem("LoginErrorMessage"));
				break;
			default:
				handleError("Preencha os dados corretamente");
				break;
		}
	}

	function formatInput(loginValue) {
		if (document.getElementById("login").value.length > 14) {
			setMask([
				/\d/,
				/\d/,
				".",
				/\d/,
				/\d/,
				/\d/,
				".",
				/\d/,
				/\d/,
				/\d/,
				"/",
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				"-",
				/\d/,
				/\d/,
			]);
			setLogin(loginValue);
		} else {
			setMask([
				/\d/,
				/\d/,
				/\d/,
				".",
				/\d/,
				/\d/,
				/\d/,
				".",
				/\d/,
				/\d/,
				/\d/,
				"-",
				/\d/,
				/\d/,
				/\d/,
			]);
			setLogin(loginValue);
		}
	}
}

export default connect((state) => ({ properties: state }))(Login);
