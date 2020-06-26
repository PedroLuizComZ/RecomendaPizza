import React, { useEffect, useState } from "react";

import { Container } from "./Styles";
import MaskedInput from "react-text-mask";
import Slide from "@material-ui/core/Slide";
import { PreCadController } from "../../controllers/UserController";
import { NavLink } from "react-router-dom";

export default function PreCad(props) {
	const [telephone, setTelephone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("Preencha os dados corretamente");

	const [loading, setLoading] = useState(false);

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		// Atualiza o titulo do documento usando a API do browser
		document.getElementById("sidebar_btn").style.display = "none";
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"} style={{ textAlign: "center" }}>
					<header>
						<h3> Faça parte da maior rede de parceiros</h3>{" "}
						<h3> montadores de móveis do Brasil. </h3>
						<h3>
							{" "}
							A rede que mais conecta profissionais aos clientes.{" "}
						</h3>
					</header>
					<br />
					<section className={"flex-column"}>
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
						<span className="login-span">Nome Completo</span>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type={"text"}
							maxLength={150}
							className={"pre-cad-input"}
							autoComplete="off"
						/>
						<span className="login-span">
							Telefone com WhatsApp (número com DDD)
						</span>
						<MaskedInput
							id={"telephone"}
							type={"tel"}
							placeholder={""}
							mask={[
								"+",
								/\d/,
								/\d/,
								" ",
								"(",
								/\d/,
								/\d/,
								")",
								" ",
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								"-",
								/\d/,
								/\d/,
								/\d/,
								/\d/,
							]}
							value={telephone}
							onChange={(e) => setTelephone(e.target.value)}
							onFocus={() => handleFocus()}
							className={"pre-cad-input"}
							autoComplete="off"
						/>
						<span className="login-span">
							E-mail (campo não obrigatório)
						</span>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type={"email"}
							maxLength={150}
							placeholder={""}
							className={"pre-cad-input"}
							autoComplete="off"
						/>
						<button
							onClick={() => handleClickCad()}
							className={"button__border"}
						>
							<span>Cadastrar</span>
						</button>
						<br />
					</section>
					<NavLink to="/termo-de-uso" className={"link-default"}>
						Termo de uso
					</NavLink>
				</div>
			</Container>
		</Slide>
	);

	async function handleClickCad() {
		if (loading) {
			return;
		}
		setLoading(true);
		if (telephone.replace(/[_]+/g, "").length >= 19) {
			let ddi = telephone.split(" ")[0].replace("+", "");
			let ddd = telephone.split(" ")[1].replace("(", "");
			ddd = ddd.replace(")", "");
			let telephoneValue = telephone.split(" ")[2].replace("-", "");
			if (
				telephoneValue.length === 9 &&
				ddi.length >= 2 &&
				ddd.length >= 2 &&
				name.length >= 1
			) {
				const preCadLabel = {
					ddi: ddi,
					ddd: ddd,
					celular: telephoneValue,
					nmusuario: name,
					email: email,
				};
				const response = await PreCadController(preCadLabel);
				handleResponse(response);
			} else {
				handleError("Preencha os dados corretamente");
			}
		} else {
			handleError("Preencha os dados corretamente");
		}
	}

	function handleResponse(response) {
		switch (response) {
			case "200":
				props.history.push("/pre-cadastro-mensagem");
				break;
			case "201":
				window.location.href =
					process.env.REACT_APP_API_URL_DEFAUT +
					"?tk=" +
					localStorage.getItem("PreCadToken") +
					"#/primeiro-acesso";
				break;
			case "400":
				handleError(localStorage.getItem("ErrorMessage"));
				break;
			case "403":
				handleError(localStorage.getItem("ErrorMessage"));
				break;
			default:
				handleError("Preencha os dados corretamente");
				break;
		}
		setLoading(false);
	}

	function handleError(message) {
		setErrorMessage(true);
		setMessage(message);
		setLoading(false);
	}

	function handleFocus() {
		if (telephone === "") {
			setTelephone("+55");
			setTimeout(() => {
				document.getElementById("telephone").setSelectionRange(3, 3);
			}, 200);
		}
	}
}
