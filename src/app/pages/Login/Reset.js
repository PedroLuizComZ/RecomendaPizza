import React, { useEffect, useState } from "react";

import { Container } from "./Styles";
import MaskedInput from "react-text-mask";
import { backPage } from "../../../Routes.js";

import Slide from "@material-ui/core/Slide";

export default function Reset(props) {
	const [login, setLogin] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);
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
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {});

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
						className={"error-message"}
					>
						Preencha um CPF válido
					</label>
					<p id="form-dialog-title">
						Digite seu login para receber uma mensagem com o link
						para recuperar sua senha
					</p>
					<MaskedInput
						mask={mask}
						className="form-control text-input text-input-md"
						placeholder="Login"
						guide={false}
						type="tel"
						id="login"
						value={login}
						onKeyUp={(e) => formatInput(e.target.value)}
					/>
					<button
						onClick={() => HandleClick()}
						className={"button__border"}
					>
						<div className={"reset-btn"}> Confirmar</div>
					</button>
				</div>
			</Container>
		</Slide>
	);

	function HandleClick() {
		let newcpf = login;
		newcpf = newcpf.replace(/-/g, "");
		newcpf = newcpf.replace(/_/g, "");
		newcpf = newcpf.split(".").join("");
		if (newcpf.length === 11) {
			localStorage.setItem("NewCpf", newcpf);
			localStorage.setItem("Action", "NEW_PASSWORD");
			props.history.push("/usuario-auth/carregando");
		} else {
			setErrorMessage(true);
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
