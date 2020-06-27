import React, { useState, useEffect } from "react";

import { Container } from "./Styles";
import ProfissionalDetail from "./Detail";

import Sucesso from "../../../assets/images/finish.png";
import MobileStepper from "@material-ui/core/MobileStepper";
import Switch from "react-switch";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Loader from "../../../components/Loader/Loader";
import {
	ProfessionalController,
	PartnerController,
	FinishCadController,
	GetPartnerController,
} from "../../../controllers/ProfessionalController";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { NavLink } from "react-router-dom";
import MaskedInput from "react-text-mask";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		maxWidth: "550px",
		margin: "auto",
	},
	modalEnd: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "auto",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	root: {
		flexGrow: 1,
	},
}));

export default function Profissional(props) {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);

	const [moveisSelected, setMoveisSelected] = useState(0);
	const [expMoveis, setExpMoveis] = useState(false);
	const [contMoveis, setContMoveis] = useState(1);

	const [instalacaoSelected, setInstalacaoSelected] = useState(0);
	const [expInstalacoes, setExpInstalacoes] = useState(false);
	const [contInstalacoes, setContInstalacoes] = useState(1);

	const [ajudante, setAjudante] = useState(false);
	const [ajudanteSelected, setAjudanteSelected] = useState(0);
	const [ajudanteName, setAjudanteName] = useState("");
	const [ajudanteTelphone, setAjudanteTelphone] = useState("");

	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState(false);

	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("Preencha os dados corretamente");

	const [arrayPartner, setArrayPartner] = useState([]);
	const [arrayPartnerId, setArrayPartnerId] = useState([]);
	const [arrayPartnerDisable, setArrayPartnerDisable] = useState([]);
	const [loaderPartner, setLoaderPartner] = useState(true);
	const [partnerName, setPartnerName] = useState("");
	const [noPartnerId, setnoPartnerId] = useState("");
	const [noPartnerName, setnoPartnerName] = useState("");

	const [state, setState] = useState({});

	const [etapa, setEtapa] = useState("");

	const selected = {
		color: "#15125c",
		background: "#f3983b",
		border: "solid 2.5px",
		height: "33px",
	};

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	function handleClose() {
		setOpen(false);
	}

	function handleCloseReview() {
		setOpen(false);
		window.location.reload();
	}

	const handleSendData = () => {
		FinishCad();
	};

	useEffect(() => {
		document.getElementById("toolbar_container").style.display = "flex";
		checkPartners();
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		setEtapa(UserData.etapa);
		checkIfAnyMoveisExist(UserData);
		checkIfAnyInstalacaoExist(UserData);
		checkIfAnyAjudanteExist(UserData);
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div>
				{etapa === "anm" || etapa === "apr" ? (
					<ProfissionalDetail />
				) : (
					<Container>
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
						{activeStep === 0 ? (
							<section className={"main-content"}>
								<h1 className={"headers-default pb-0"}>
									Tem Experiência com Montagem de Móveis?
								</h1>
								<div className={"button-container"}>
									<div
										onClick={() =>
											handleClick("expMoveis", false)
										}
										className="begin-btn-container"
									>
										<div
											style={
												moveisSelected === "Não"
													? selected
													: {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Não
										</div>
									</div>
									<div
										onClick={() =>
											handleClick("expMoveis", true)
										}
										className="begin-btn-container"
									>
										<div
											style={
												moveisSelected === "Sim"
													? selected
													: {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Sim
										</div>
									</div>
								</div>
								{expMoveis ? (
									<div>
										<h1 className={"headers-default pb-0"}>
											Quantos anos?
										</h1>
										<div className={"cont-container"}>
											<div
												onClick={() =>
													removeContMoveis()
												}
												className={"cont-buttom"}
											>
												<span className={"cont-label"}>
													-
												</span>
											</div>
											<span className="years-number">
												{contMoveis}
											</span>
											<div
												onClick={() => addContMoveis()}
												className={"cont-buttom"}
											>
												<span
													className={
														"cont-label-plus"
													}
												>
													+
												</span>
											</div>
										</div>
									</div>
								) : (
									<></>
								)}
							</section>
						) : (
							<></>
						)}
						{activeStep === 1 ? (
							<section className={"main-content "}>
								<h1 className={"headers-default pb-0"}>
									Tem experiência com instalações?
								</h1>
								<div className={"button-container"}>
									<div
										onClick={() =>
											handleClick("expInstalacoes", false)
										}
										className="begin-btn-container"
									>
										<div
											style={
												instalacaoSelected === "Não"
													? selected
													: {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Não
										</div>
									</div>
									<div
										onClick={() =>
											handleClick("expInstalacoes", true)
										}
										className="begin-btn-container"
									>
										<div
											style={
												instalacaoSelected === "Sim"
													? selected
													: {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Sim
										</div>
									</div>
								</div>
								{expInstalacoes ? (
									<div>
										<h1 className={"headers-default pb-0"}>
											Quantos anos?
										</h1>
										<div className={"cont-container"}>
											<div
												onClick={() =>
													removeContInstalacoes()
												}
												className={"cont-buttom"}
											>
												<span className={"cont-label"}>
													-
												</span>
											</div>
											<span className="years-number">
												{contInstalacoes}
											</span>
											<div
												onClick={() =>
													addContInstalacoes()
												}
												className={"cont-buttom"}
											>
												<span
													className={
														"cont-label-plus"
													}
												>
													+
												</span>
											</div>
										</div>
									</div>
								) : (
									<></>
								)}
							</section>
						) : (
							<></>
						)}
						{activeStep === 2 ? (
							<section className={"main-content "}>
								<h1 className={"headers-default pb-0"}>
									Trabalha com ajudante?
								</h1>
								<div className={"button-container"}>
									<div
										onClick={() =>
											handleClick("ajudante", false)
										}
										className="begin-btn-container"
									>
										<div
											style={
												ajudanteSelected === "Não"
													? selected
													: {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Não
										</div>
									</div>
									<div
										onClick={() =>
											handleClick("ajudante", true)
										}
										className="begin-btn-container"
									>
										<div
											style={
												ajudanteSelected === "Sim"
													? selected
													: {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Sim
										</div>
									</div>
								</div>

								{ajudante ? (
									<>
										<div className={"ajudant-container"}>
											<span className="login-span">
												Nome Completo
											</span>
											<input
												value={ajudanteName}
												onChange={(e) =>
													setAjudanteName(
														e.target.value
													)
												}
												type={"text"}
												maxLength={150}
												placeholder={""}
												className={"ajusted-input"}
												autoComplete="off"
											/>
										</div>
										<div className={"ajudant-container"}>
											<span className="login-span">
												Telefone com WhatsApp (número
												com DDD)
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
												value={ajudanteTelphone}
												onChange={(e) =>
													setAjudanteTelphone(
														e.target.value
													)
												}
												onFocus={() => handleFocus()}
												className={"ajusted-input"}
												autoComplete="off"
											/>
										</div>
									</>
								) : (
									<></>
								)}
							</section>
						) : (
							<></>
						)}
						{activeStep === 3 ? (
							<section className={"main-content "}>
								<h1 className={"headers-default pb-0"}>
									Com quais parceiros você trabalha
									atualmente?
								</h1>
								{loaderPartner ? (
									<></>
								) : (
									arrayPartner.map((partner, cont) => (
										<div key={cont}>
											<div
												key={cont}
												className={"partner-container"}
											>
												<span
													className={"partner-label"}
												>
													{partner}
												</span>

												<Switch
													checked={
														state[
															arrayPartner[cont]
														]
													}
													onChange={
														handleChangeCheckbox
													}
													offColor="#2e2b84"
													onColor="#f98c29"
													onHandleColor="#FFFFFF"
													handleDiameter={20}
													uncheckedIcon={false}
													checkedIcon={false}
													boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
													activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
													height={30}
													width={50}
													className="react-switch"
													id={arrayPartner[cont]}
													name={arrayPartner[cont]}
													disabled={
														arrayPartnerDisable[
															cont
														]
													}
												/>
											</div>
											{state[arrayPartner[cont]] &&
											cont === arrayPartner.length - 1 ? (
												<input
													value={partnerName}
													onChange={(e) =>
														setPartnerName(
															e.target.value
														)
													}
													type={"text"}
													className={
														"width-other-input-size"
													}
													placeholder={
														"Escreva aqui o parceiro"
													}
													autoComplete="off"
												/>
											) : (
												<></>
											)}
										</div>
									))
								)}
							</section>
						) : (
							<></>
						)}

						<footer className={"footer-default"}>
							<MobileStepper
								variant="dots"
								steps={4}
								position="static"
								activeStep={activeStep}
								className={classes.root}
								nextButton={
									<div
										onClick={handleNext}
										disabled={activeStep === 1}
										className="begin-btn-container"
									>
										<div className={"go-forward-button"}>
											{loading ? (
												<Loader />
											) : activeStep === 3 ? (
												JSON.parse(
													localStorage.getItem(
														"UserData"
													)
												).possumei === "sim" ? (
													"Finalizar"
												) : (
													"Salvar"
												)
											) : (
												"Avançar"
											)}
										</div>
									</div>
								}
								backButton={
									activeStep !== 0 ? (
										<div
											onClick={handleBack}
											disabled={activeStep === 0}
											className="begin-btn-container"
										>
											<div className={"go-back-button"}>
												Voltar
											</div>
										</div>
									) : (
										<div className={"bnt-spacer"}></div>
									)
								}
							/>
						</footer>
						<Modal
							aria-labelledby="transition-modal-title"
							aria-describedby="transition-modal-description"
							className={classes.modalEnd}
							open={checked}
							onClose={handleClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
						>
							<Slide timeout={850} direction="up" in={checked}>
								<div className="end-container">
									<div className={"sucess-icon"}>
										<img
											className={"sucess-image"}
											src={Sucesso}
											alt=""
										/>
									</div>
									<div className={"end-container-text"}>
										<p className={"sucess-label"}>
											Agradecemos seu interesse em ser um
											parceiro MMS.
										</p>
										<p className={"sucess-label"}>
											A partir deste momento nosso time
											analisará seu cadastro, e assim que
											o processo for concluído entraremos
											em contato.
										</p>
										<p className={"sucess-label"}>
											Você pode conferir o status do seu
											cadastro
										</p>
									</div>
									<div className={"sucess-link-container"}>
										<div
											onClick={() => handleProgressBtn()}
											className={"sucess-link"}
										>
											clicando aqui
										</div>
									</div>
									<br />
								</div>
							</Slide>
						</Modal>
						<Modal
							aria-labelledby="transition-modal-title"
							aria-describedby="transition-modal-description"
							className={classes.modal}
							open={open}
							onClose={handleClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
						>
							<Fade in={open}>
								<div className={classes.paper}>
									{JSON.parse(
										localStorage.getItem("UserData")
									).possumei === "sim" ? (
										<>
											<p
												className={"modal-text-color"}
												id="transition-modal-description"
											>
												Seus dados serão enviados a MMS
												para análise.{" "}
											</p>
											<p
												className={"modal-text-color"}
												id="transition-modal-description"
											>
												Deseja revisar as informações
												antes de enviar?{" "}
											</p>
											<div className="modal-btn-container">
												<div
													onClick={() =>
														handleCloseReview()
													}
													className="begin-btn-container"
												>
													<div
														className={
															"question-button"
														}
													>
														Revisar
													</div>
												</div>
												<div
													onClick={() =>
														handleSendData()
													}
													className="begin-btn-container"
												>
													<div
														className={
															"question-button"
														}
													>
														Enviar
													</div>
												</div>
											</div>
										</>
									) : (
										<>
											{" "}
											<p
												className={"modal-text-color"}
												id="transition-modal-description"
											>
												Obrigado por nos contar um pouco
												mais sobre você!{" "}
											</p>
											<p
												className={"modal-text-color"}
												id="transition-modal-description"
											>
												Para que os seus dados sejam
												enviados para análise precisamos
												que possua um CNPJ, então
												esperamos que retorne em breve
												para concluir o seu cadastro.
											</p>
											<div className="modal-btn-container-out-mei">
												<NavLink
													to={"/galeria-de-video"}
													onClick={() =>
														handleClose()
													}
													className="begin-btn-container"
												>
													<div
														className={
															"question-button"
														}
													>
														Fechar
													</div>
												</NavLink>
											</div>{" "}
										</>
									)}
								</div>
							</Fade>
						</Modal>
					</Container>
				)}
			</div>
		</Slide>
	);

	function handleClick(typeExp, value) {
		switch (typeExp) {
			case "expMoveis":
				value ? setMoveisSelected("Sim") : setMoveisSelected("Não");
				setExpMoveis(value);
				if (!value) setContMoveis(1);
				break;
			case "expInstalacoes":
				value
					? setInstalacaoSelected("Sim")
					: setInstalacaoSelected("Não");
				setExpInstalacoes(value);
				if (!value) setContInstalacoes(1);
				break;
			case "ajudante":
				value ? setAjudanteSelected("Sim") : setAjudanteSelected("Não");
				setAjudante(value);
				break;
			default:
				console.log(typeExp);
				break;
		}
	}

	function handleNext() {
		handleActiveStep(activeStep);
	}

	function handleBack() {
		if (activeStep >= 1) {
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
		}
	}

	function addContMoveis() {
		setContMoveis(contMoveis + 1);
	}

	function removeContMoveis() {
		if (contMoveis > 1) {
			setContMoveis(contMoveis - 1);
		}
	}

	function addContInstalacoes() {
		setContInstalacoes(contInstalacoes + 1);
	}

	function removeContInstalacoes() {
		if (contInstalacoes > 1) {
			setContInstalacoes(contInstalacoes - 1);
		}
	}

	function handleActiveStep(activeStep) {
		setLoading(true);
		switch (activeStep) {
			case 0:
				handleMontagem();
				break;
			case 1:
				handleInstalacao();
				break;
			case 2:
				handleAjudante();
				break;
			case 3:
				handlePartner();
				break;
			default:
				console.log(activeStep);
				break;
		}
	}

	async function handleMontagem() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		let expMontagem = expMoveis ? "sim" : "nao";
		expMontagem = moveisSelected !== 0 ? expMontagem : "";

		let contMont = expMoveis ? contMoveis : 0;
		expMontagem = moveisSelected !== 0 ? expMontagem : "";
		const professionalLabel = {
			idusuario: UserData.idusuario,
			expmontagem: expMontagem,
			tempexpmontagem: contMont,
		};
		const response = await ProfessionalController(professionalLabel);
		if (response === "200") {
			setLoading(false);
			localStorage.setItem(
				"MontagemData",
				JSON.stringify(professionalLabel)
			);
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
			setErrorMessage(false);
		} else {
			handleError(localStorage.getItem("ProfessionalErrorMessage"));
			setLoading(false);
		}
	}

	async function handleInstalacao() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		let expInstalacao = expInstalacoes ? "sim" : "nao";
		expInstalacao = instalacaoSelected !== 0 ? expInstalacao : "";
		let contInst = expInstalacoes ? contMoveis : 0;
		const professionalLabel = {
			idusuario: UserData.idusuario,
			expinstalacao: expInstalacao,
			tempexpinstalacao: contInst,
		};
		const response = await ProfessionalController(professionalLabel);
		if (response === "200") {
			setLoading(false);
			localStorage.setItem(
				"InstalacaoData",
				JSON.stringify(professionalLabel)
			);
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
			setErrorMessage(false);
		} else {
			handleError(localStorage.getItem("ProfessionalErrorMessage"));
			setLoading(false);
		}
	}

	async function handleAjudante() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		let ajudanteValue = ajudante ? "sim" : "nao";
		ajudanteValue = ajudanteSelected !== 0 ? ajudanteValue : "";
		let ajudanteNameValue = ajudante ? ajudanteName : "";
		let ajudanteTelphoneValue = ajudante
			? ajudanteTelphone.replace(/\D/g, "")
			: "";

		const professionalLabel = {
			idusuario: UserData.idusuario,
			trabajudante: ajudanteValue,
			nmajudante: ajudanteNameValue,
			telajudante: ajudanteTelphoneValue,
		};

		const response = await ProfessionalController(professionalLabel);
		if (response === "200") {
			setLoading(false);
			localStorage.setItem(
				"ajudanteData",
				JSON.stringify(professionalLabel)
			);
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
			setErrorMessage(false);
		} else {
			handleError(localStorage.getItem("ProfessionalErrorMessage"));
			setLoading(false);
		}
	}

	async function handlePartner() {
		let idParceiroArray = [];
		arrayPartnerId.forEach((element, cont) => {
			if (state[arrayPartner[cont]]) {
				let txtOpcaoLabel = "";
				if (arrayPartner[cont] === "Outros")
					txtOpcaoLabel = partnerName;
				idParceiroArray[idParceiroArray.length] = {
					idparceiro: element,
					txtopcao: txtOpcaoLabel,
				};
			}
		});
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		const professionalLabel = {
			idusuario: UserData.idusuario,
			parceiros: idParceiroArray,
		};
		const response = await PartnerController(professionalLabel);
		if (response === "200") {
			localStorage.setItem(
				"ajudanteData",
				JSON.stringify(professionalLabel)
			);
			setLoading(false);
			setErrorMessage(false);
			handleOpen();
		} else {
			handleError(localStorage.getItem("ProfessionalErrorMessage"));
			setLoading(false);
		}
	}

	async function FinishCad() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		const response = await FinishCadController({
			idusuario: UserData.idusuario,
		});
		handleResponse(response);
	}

	function handleResponse(response) {
		switch (response) {
			case "200":
				setChecked(true);
				setErrorMessage(false);
				break;
			default:
				handleError(localStorage.getItem("FinishCadErrorMessage"));
				break;
		}
		setLoading(false);
		setOpen(false);
	}

	function handleError(message) {
		setErrorMessage(true);
		setMessage(message);
	}

	async function checkPartners() {
		const response = await GetPartnerController();
		switch (response) {
			case "200":
				const PartnerData = JSON.parse(
					localStorage.getItem("PartnerData")
				);
				PartnerData.forEach((element, cont) => {
					let arrayPartnerValue = arrayPartner;
					arrayPartnerValue[arrayPartnerValue.length] =
						element.nmparceiro;
					setArrayPartner(arrayPartnerValue);

					let arrayState = state;
					arrayState[element.nmparceiro] = false;

					setState(arrayState);

					let arrayPartnerIdValue = arrayPartnerId;
					arrayPartnerIdValue[arrayPartnerIdValue.length] =
						element.idparceiro;
					setArrayPartnerId(arrayPartnerIdValue);

					let arrayPartnerDisableValue = arrayPartnerDisable;
					arrayPartnerDisableValue[
						arrayPartnerDisableValue.length
					] = false;
					setArrayPartnerDisable(arrayPartnerDisableValue);

					if (element.flsemparceiro === "sim") {
						setnoPartnerId(cont);
						setnoPartnerName(element.nmparceiro);
					}
				});
				checkIfAnyPartnerExist();
				setLoaderPartner(false);
				break;
			default:
				setArrayPartner([]);
				break;
		}
	}

	function handleChangeCheckbox(checked, event, id) {
		if (id === noPartnerName && checked) {
			let stateValue = state;
			arrayPartner.forEach((element, cont) => {
				if (cont === noPartnerId) {
					stateValue = {
						...stateValue,
						[arrayPartner[cont]]: true,
					};
				} else {
					stateValue = { ...stateValue, [arrayPartner[cont]]: false };
				}
			});
			setState(stateValue);
		} else {
			if (checked) {
				setState({
					...state,
					[id]: checked,
					"Não atuo com nenhum parceiro": false,
				});
			} else {
				setState({
					...state,
					[id]: checked,
				});
			}
		}
	}

	function checkIfAnyMoveisExist(UserData) {
		if (UserData.expmontagem === "sim") {
			setExpMoveis(true);
			setMoveisSelected("Sim");
			setContMoveis(UserData.tempexpmontagem);
		} else if (UserData.expmontagem === "nao") {
			setExpMoveis(false);
			setMoveisSelected("Não");
		}
	}

	function checkIfAnyInstalacaoExist(UserData) {
		if (UserData.expinstalacao === "sim") {
			setExpInstalacoes(true);
			setInstalacaoSelected("Sim");
			setContInstalacoes(UserData.tempexpinstalacao);
		} else if (UserData.expinstalacao === "nao") {
			setExpInstalacoes(false);
			setInstalacaoSelected("Não");
		}
	}

	function checkIfAnyAjudanteExist(UserData) {
		if (UserData.trabajudante === "sim") {
			setAjudante(true);
			setAjudanteSelected("Sim");
			setAjudanteName(UserData.nmajudante);
			setAjudanteTelphone(UserData.telajudante);
		} else if (UserData.trabajudante === "nao") {
			setAjudante(false);
			setAjudanteSelected("Não");
		}
	}

	function checkIfAnyPartnerExist() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		let savedPartner = [];
		let contador = 0;
		arrayPartner.forEach((element, cont) => {
			contador = 0;
			UserData.parceiro.forEach((partner, contPartner) => {
				if (element === partner.nmparceiro) {
					contador = 1;
					if (element === "Outros") setPartnerName(partner.txtopcao);
				}
			});

			if (contador !== 0) {
				savedPartner = handleSavedPartners(true, savedPartner, element);
			} else {
				savedPartner = handleSavedPartners(
					false,
					savedPartner,
					element
				);
			}
		});

		setState(savedPartner);
	}

	function handleSavedPartners(parner, savedPartnerArray, label) {
		if (parner) {
			return { ...savedPartnerArray, [label]: true };
		} else {
			return { ...savedPartnerArray, [label]: false };
		}
	}

	function handleProgressBtn() {
		window.location.href = "#/progresso";
	}

	function handleFocus() {
		if (ajudanteTelphone === "") {
			setAjudanteTelphone("+55");
			setTimeout(() => {
				document.getElementById("telephone").setSelectionRange(3, 3);
			}, 200);
		}
	}
}
