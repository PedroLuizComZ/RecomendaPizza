import React, { useState, useEffect } from "react";

import { Container } from "./Styles";
import EmpresarialDetail from "./Detail";

import MobileStepper from "@material-ui/core/MobileStepper";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../../../components/Loader/Loader";
import Slide from "@material-ui/core/Slide";
import MaskedInput from "react-text-mask";
import { BusinessController } from "../../../controllers/BusinessController";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { UserInfoController } from "../../../controllers/UserController";
import { FinishCadController } from "../../../controllers/ProfessionalController";
import Sucesso from "../../../assets/images/finish.png";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		maxWidth: "550px",
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

export default function Empresarial(props) {
	const classes = useStyles();

	const [activeStep, setActiveStep] = React.useState(0);
	const [mei, setMei] = useState(0);
	const selected = {
		color: "#15125c",
		background: "#f3983b",
		border: "solid 2.5px",
		height: "33px",
	};

	const [loading, setLoading] = useState(false);
	const [cnpj, setCnpj] = useState("");

	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("Preencha os dados corretamente");

	const [open, setOpen] = useState(false);

	const [isMei, setIsMei] = useState(false);
	const [disableCnpj, setDisableCnpj] = useState(false);

	const [etapa, setEtapa] = useState("");
	const [checked, setChecked] = useState(false);

	const [stepsQtd, setStepsQtd] = useState(0);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		UserData.possumei === "sim" ? setIsMei(true) : setIsMei(false);
		UserData.possumei === "sim" ? setMei("Sim") : setMei("Não");
		UserData.possumei === "sim" ? setActiveStep(1) : setActiveStep(0);
		UserData.possumei === "sim" ? setStepsQtd(2) : setStepsQtd(1);
		UserData.possumei === "sim"
			? setDisableCnpj(true)
			: setDisableCnpj(false);

		setCnpj(UserData.cnpj);
		setEtapa(UserData.etapa);
		if (document.getElementById("toolbar_container") !== null) {
			document.getElementById("toolbar_container").style.display = "flex";
		}
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div>
				{etapa === "anm" || etapa === "apr" ? (
					<EmpresarialDetail />
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
							<div className={"main-content"}>
								{isMei ? (
									<></>
								) : (
									<div
										className={
											"main-content no-mei-container"
										}
									>
										<p className={"headers-default pb-0"}>
											Para ser um parceiro MMS é
											necessário que você tenha um CNPJ e
											emita nota fiscal. Mas queremos
											saber mais sobre você, conclua o
											preenchimento dos perfis, e retorne
											com o seu CNPJ posteriormente.
										</p>
										<br />
									</div>
								)}

								<h1 className={"headers-default pb-0"}>
									Você já possui uma empresa (CNPJ)?
								</h1>

								<div className={"button-container"}>
									<div
										onClick={() => handleClick("Não")}
										className="begin-btn-container"
									>
										<div
											style={
												mei === "Não" ? selected : {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Não
										</div>
									</div>
									<div
										onClick={() => handleClick("Sim")}
										className="begin-btn-container"
									>
										<div
											style={
												mei === "Sim" ? selected : {}
											}
											className={
												"question-button-not-selected"
											}
										>
											Sim
										</div>
									</div>
								</div>
							</div>
						) : mei === "Sim" ? (
							<div className={"main-content"}>
								<h1 className={"headers-default pb-0"}>
									Informe seu CNPJ
								</h1>
								<MaskedInput
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
									className="form-control text-input text-input-md ajusted-input"
									placeholder=""
									guide={false}
									type="tel"
									id="cnpj"
									value={cnpj}
									onKeyUp={(e) => setCnpj(e.target.value)}
									disabled={disableCnpj}
									autoComplete="off"
								/>
								<p className={"cnpj-helper"}>
									( Após adicionar seu CNPJ seu login deixará
									de ser seu CPF e passará a ser seu CNPJ,
									porém sua senha continuará a mesma." )
								</p>
							</div>
						) : (
							<></>
						)}
						{!isMei ? (
							<footer className={"footer-default"}>
								<MobileStepper
									variant="dots"
									steps={stepsQtd}
									position="static"
									activeStep={activeStep}
									className={classes.root}
									nextButton={
										<div
											onClick={handleNext}
											disabled={activeStep === 1}
											className="begin-btn-container"
										>
											<div
												className={"go-forward-button"}
											>
												{loading ? (
													<Loader />
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
												<div
													className={"go-back-button"}
												>
													Voltar
												</div>
											</div>
										) : (
											<div className={"bnt-spacer"}></div>
										)
									}
								/>
							</footer>
						) : (
							<></>
						)}
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
									<p
										className={"modal-text-color"}
										id="transition-modal-description"
									>
										Seus dados serão enviados a MMS para
										análise.{" "}
									</p>
									<p
										className={"modal-text-color"}
										id="transition-modal-description"
									>
										Deseja revisar as informações antes de
										enviar?{" "}
									</p>
									<div className="modal-btn-container">
										<div
											onClick={() => handleClose()}
											className="begin-btn-container"
										>
											<div className={"question-button"}>
												Revisar
											</div>
										</div>
										<div
											onClick={() => FinishCad()}
											className="begin-btn-container"
										>
											<div className={"question-button"}>
												Enviar
											</div>
										</div>
									</div>
								</div>
							</Fade>
						</Modal>
					</Container>
				)}
			</div>
		</Slide>
	);

	function handleNext() {
		if (mei !== 0) {
			setErrorMessage(false);
			if (mei === "Sim") {
				if (activeStep < 1) {
					setActiveStep((prevActiveStep) => prevActiveStep + 1);
				} else {
					handleBusiness();
				}
			} else {
				localStorage.setItem("NoMei", "True");
				window.location.reload();
			}
		} else {
			handleError("Escolha uma das opções");
		}
	}

	function handleBack() {
		if (activeStep >= 1) {
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
		}
	}

	function handleClick(value) {
		value === "Sim" ? setStepsQtd(2) : setStepsQtd(1);
		setMei(value);
	}

	async function handleBusiness() {
		let UserData = JSON.parse(localStorage.getItem("UserData"));
		const businessLabel = {
			idusuario: UserData.idusuario,
			possuimei: "sim",
			cnpj: cnpj,
		};
		const response = await BusinessController(businessLabel);
		if (response === "200") {
			setLoading(false);
			localStorage.setItem("BusinessData", JSON.stringify(businessLabel));
			await UserInfoController({
				idusuario: UserData.idusuario,
			});
			UserData = JSON.parse(localStorage.getItem("UserData"));
			if (UserData.etapa === "ppr" && UserData.parceiro.length !== 0) {
				handleOpen();
			} else {
				window.location.reload();
			}
		} else {
			handleError(localStorage.getItem("BusinessErrorMessage"));
			setLoading(false);
		}
	}

	function handleError(message) {
		setErrorMessage(true);
		setMessage(message);
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

	function handleProgressBtn() {
		window.location.href = "#/progresso";
	}
}
