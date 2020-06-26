import React, { useEffect, useState } from "react";

import { Container } from "./Styles";
import SetaDireita from "../../assets/images/seta-direita.svg";

import Slide from "@material-ui/core/Slide";
import { NewPassword } from "../../store/user/actions/UserAction.js";
import { connect } from "react-redux";

function ResetPassword(props, { properties, dispatch }) {
	const [senha, setSenha] = useState("");
	const [senhaConfirmada, setSenhaConfirmada] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		if (localStorage.getItem("CheckPassword") !== "true") {
			props.dispatch(NewPassword("CHECK_PASSWORD"));
			props.history.push("../usuario/carregando");
		}

		// Atualiza o titulo do documento usando a API do browser
		document.getElementById("sidebar_btn").style.display = "none";

		var url = new URL(window.location.href);
		var mode = url.searchParams.get("mode");
		if (mode === "pwa") {
			localStorage.setItem("PWA", "instaled");
			props.history.push("/login");
		}

		localStorage.removeItem("CheckPassword");
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<h1>Cadastre sua nova senha</h1>
					<p>Cadastre sua nova senha com 6 digitos numéricos.</p>
					<label
						style={
							error ? { display: "block" } : { display: "none" }
						}
						className={"error-message"}
					>
						{errorMessage}
					</label>
					<form>
						<div className={"label-container"}>
							<label>Nova Senha</label>
							<input
								value={senha}
								onChange={(e) =>
									!isNaN(
										e.target.value -
											parseFloat(e.target.value)
									) || e.target.value === ""
										? setSenha(e.target.value)
										: console.log(e.target.value)
								}
								type={"tel"}
								className={"key hide-input input-width"}
								maxLength={6}
								placeholder={"Digite sua senha"}
								autoComplete="off"
							/>
						</div>
						<div className={"label-container"}>
							<label>Confirmar Senha</label>
							<input
								value={senhaConfirmada}
								onChange={(e) =>
									!isNaN(
										e.target.value -
											parseFloat(e.target.value)
									) || e.target.value === ""
										? setSenhaConfirmada(e.target.value)
										: console.log(e.target.value)
								}
								type={"tel"}
								className={"key hide-input input-width"}
								maxLength={6}
								placeholder={"Confirme sua senha"}
								autoComplete="off"
							/>
						</div>
					</form>
					<label>
						<small>Dados em conformidade a lei LGPD</small>
					</label>
					<div>
						<div onClick={() => HandleClick()}>
							<button className={"button__border"}>
								<span>
									<img
										className={"btn-icons-size"}
										src={SetaDireita}
										alt={""}
									/>{" "}
									Alterar
								</span>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</Slide>
	);

	function HandleClick() {
		if (senha.length !== 6 || senhaConfirmada.length !== 6) {
			setErrorMessage("A senha escolhida deve ter 6 caracteres");
			setError(true);
		} else {
			if (senha === senhaConfirmada) {
				var isnum = /^\d+$/.test(senha);
				const cpf = localStorage.getItem("CPF");
				if (isnum) {
					let params = {
						senha: senha,
						cpf: cpf,
					};
					props.dispatch(NewPassword("ADD_NEW_PASSWORD", params));
					props.history.push("../usuario/carregando");
				} else {
					setErrorMessage(
						"Senha inválida! Somente números são aceitos"
					);
					setError(true);
				}
			} else {
				setErrorMessage("Senha e Confirmar Senha devem ser iguais");
				setError(true);
			}
		}
	}
}

export default connect((state) => ({ properties: state }))(ResetPassword);
