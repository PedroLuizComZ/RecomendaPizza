import React, { useEffect, useState } from "react";

import { Container } from "./Styles";
import MaskedInput from "react-text-mask";

import Slide from "@material-ui/core/Slide";
import Loader from "../../components/loader/Loader";
import { connect } from "react-redux";
import {
	ValidaTiketController,
	CadPasswordController,
} from "../../controllers/UserController";

function FirstAccess(props, { properties, dispatch }) {
	const [loading, setLoading] = useState(true);
	const [mei, setMei] = useState("");
	const [meiSelected, setMeiSelected] = useState(false);

	const [cpf, setCpf] = useState("");
	const [cnpj, setCnpj] = useState("");

	const [senha, setSenha] = useState("");
	const [senhaConfirmada, setSenhaConfirmada] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [tkValue, setTkValue] = useState("");

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		var url_string__logo = window.location.href;
		var tokenParam = new URL(url_string__logo);
		var tk = tokenParam.searchParams.get("tk");
		if (tk === null) {
			props.history !== undefined
				? props.history.push("../login")
				: console.log("");
		} else {
			setTkValue(tk);
			checkApiToken(tk);
			return;
		}
	}, [props]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Slide direction="left" in={true} mountOnEnter unmountOnExit>
					<Container>
						<div className={"main-content"}>
							<label
								style={
									error
										? { display: "block" }
										: { display: "none" }
								}
								className={"error-message"}
							>
								{errorMessage}
							</label>

							{!meiSelected ? (
								<Slide
									direction="left"
									in={true}
									mountOnEnter
									unmountOnExit
								>
									<div className={"main-content"}>
										<h1 className={"headers-default pb-0"}>
											Você possui empresa aberta (CNPJ) e
											está apto para emissão de nota
											fiscal?
										</h1>
										<br />
										<div className={"button-container"}>
											<div
												onClick={() =>
													handleClick("Não")
												}
												className="begin-btn-container"
											>
												<div
													className={
														"question-button"
													}
												>
													Não
												</div>
											</div>
											<div
												onClick={() =>
													handleClick("Sim")
												}
												className="begin-btn-container"
											>
												<div
													className={
														"question-button"
													}
												>
													Sim
												</div>
											</div>
										</div>
									</div>
								</Slide>
							) : (
								<>
									<Slide
										direction="left"
										in={true}
										mountOnEnter
										unmountOnExit
									>
										<form>
											{mei === "Sim" ? (
												<div
													className={
														"label-container"
													}
												>
													<h3
														className={
															"headers-default pb-0"
														}
													>
														Informe Seu CNPJ e
														cadastre sua senha{" "}
													</h3>
													<small
														className={
															"small-white"
														}
													>
														Mínimo de 8 caracteres
													</small>
													<br />
													<label
														className={"login-span"}
													>
														CNPJ
													</label>
													<MaskedInput
														type={"tel"}
														mask={[
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
														]}
														value={cnpj}
														onChange={(e) =>
															setCnpj(
																e.target.value
															)
														}
														className={
															"input-width"
														}
														autoComplete="off"
													/>
												</div>
											) : (
												<div
													className={
														"label-container"
													}
												>
													<h3
														className={
															"headers-default pb-0"
														}
													>
														Informe Seu CPF e
														cadastre sua senha{" "}
													</h3>
													<small
														className={
															"small-white"
														}
													>
														Mínimo de 8 caracteres
													</small>
													<br />
													<label
														className={"login-span"}
													>
														CPF
													</label>
													<MaskedInput
														type={"tel"}
														mask={[
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
														]}
														value={cpf}
														onChange={(e) =>
															setCpf(
																e.target.value
															)
														}
														className={
															"input-width"
														}
														autoComplete="off"
													/>
												</div>
											)}

											<div className={"label-container"}>
												<label className={"login-span"}>
													Senha
												</label>
												<input
													value={senha}
													onChange={(e) =>
														setSenha(e.target.value)
													}
													type={"text"}
													className={
														"key hide-input input-width"
													}
													maxLength={20}
													placeholder={""}
													autoComplete="off"
												/>
											</div>
											<div className={"label-container"}>
												<label className={"login-span"}>
													Confirmar Senha
												</label>
												<input
													value={senhaConfirmada}
													onChange={(e) =>
														setSenhaConfirmada(
															e.target.value
														)
													}
													maxLength={20}
													placeholder={""}
													type={"text"}
													className={
														"key hide-input input-width"
													}
													autoComplete="off"
												/>
											</div>
											<div className={"security-label"}>
												<small>
													Dados em conformidade a lei
													LGPD
												</small>
											</div>
										</form>
									</Slide>

									<footer className={"footer-container"}>
										<div onClick={() => handleBackClick()}>
											<button
												className={
													"button__border margin-right-8"
												}
											>
												<span>Voltar</span>
											</button>
										</div>
										<div onClick={() => AddPassword()}>
											<button
												className={"button__border"}
											>
												<span>Prosseguir</span>
											</button>
										</div>
									</footer>
								</>
							)}
						</div>
					</Container>
				</Slide>
			)}
		</>
	);

	function handleClick(value) {
		setMei(value);
		setMeiSelected(true);
	}

	function handleBackClick(value) {
		setCnpj("");
		setCpf("");
		setSenha("");
		setSenhaConfirmada("");
		setError(false);
		setMeiSelected(false);
	}

	async function AddPassword() {
		if (senha.length < 8 || senhaConfirmada.length < 8) {
			setErrorMessage(
				"A senha escolhida deve ter no mínimo 8 caracteres"
			);
			setError(true);
		} else {
			if (senha === senhaConfirmada) {
				handleMei();
			} else {
				setErrorMessage("Senha e Confirmar Senha devem ser iguais");
				setError(true);
			}
		}
	}

	async function checkApiToken(apiToken) {
		const response = await ValidaTiketController(apiToken);
		handleResponse(response);
		setLoading(false);
	}

	async function handleResponse(response) {
		switch (response) {
			case "200":
				document.getElementById("sidebar_btn").style.display = "none";
				var url = new URL(window.location.href);
				var mode = url.searchParams.get("mode");
				if (mode === "pwa") {
					localStorage.setItem("PWA", "instaled");
					props.history.push("/login");
				}
				return true;
			case "202":
				props.history.push("/login");
				return response;
			default:
				props.history.push("/login");
				return response;
		}
	}

	async function handleCadPasswordResponse(response, passwordLabel) {
		switch (response) {
			case "200":
				document.location.href = "#/bem-vindo";
				return true;
			case "201":
				document.location.href = "#/bem-vindo";
				return true;
			default:
				setErrorMessage(localStorage.getItem("ErrorMessage"));
				setError(true);
		}
	}

	async function handleMei(params) {
		if (mei === "Sim") {
			if (isCnpjValid()) {
				CadLogin();
			} else {
				setErrorMessage("CNPJ incompleto");
				setError(true);
			}
		} else {
			if (isCpfValid()) {
				CadLogin();
			} else {
				setErrorMessage("CPF incompleto");
				setError(true);
			}
		}
	}

	async function isCnpjValid() {
		if (cnpj.left === 18) {
			return true;
		} else {
			return false;
		}
	}

	async function isCpfValid() {
		if (cpf.left === 14) {
			return true;
		} else {
			return false;
		}
	}

	async function CadLogin() {
		const passwordLabel = {
			ticketacesso: tkValue,
			senha: senha,
			possuimei: mei === "Sim" ? "sim" : "nao",
			cpf: cpf,
			cnpj: cnpj,
		};
		const response = await CadPasswordController(passwordLabel);
		handleCadPasswordResponse(response, passwordLabel);
	}
}

export default connect((state) => ({ properties: state }))(FirstAccess);
