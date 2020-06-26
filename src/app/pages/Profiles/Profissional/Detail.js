import React, { useState, useEffect } from "react";

import { Container } from "./Styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { GetPartnerController } from "../../../controllers/ProfessionalController";

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

export default function ProfissionalDetail(props) {
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

	useEffect(() => {
		document.getElementById("toolbar_container").style.display = "flex";
		checkPartners();
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		checkIfAnyMoveisExist(UserData);
		checkIfAnyInstalacaoExist(UserData);
		checkIfAnyAjudanteExist(UserData);
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
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
						{JSON.parse(localStorage.getItem("UserData")).etapa ===
						"anm" ? (
							<div className={"small-white"}>
								<small>
									Seu cadastro ainda está em análise pelo
									nosso time, solicitamos que aguarde nosso
									contato.
								</small>
							</div>
						) : null}
						<h1 className={"headers-default pb-0"}>
							Tem Experiência com Montagem de Móveis?
						</h1>
						<div className={"detail-list-container"}>
							<span className={"detail-list-item"}>
								{moveisSelected}
							</span>
						</div>
						{expMoveis ? (
							<div>
								<h1 className={"headers-default pb-0"}>
									Quantos anos?
								</h1>
								<div className={"detail-list-container"}>
									<span className={"detail-list-item"}>
										{contMoveis}
									</span>
								</div>
							</div>
						) : (
							<></>
						)}

						<h1 className={"headers-default pb-0"}>
							Tem Experiência com instalações?
						</h1>
						<div className={"detail-list-container"}>
							<span className={"detail-list-item"}>
								{instalacaoSelected}
							</span>
						</div>
						{expInstalacoes ? (
							<div>
								<h1 className={"headers-default pb-0"}>
									Quantos anos?
								</h1>
								<div className={"detail-list-container"}>
									<span className={"detail-list-item"}>
										{contInstalacoes}
									</span>
								</div>
							</div>
						) : (
							<></>
						)}
						<h1 className={"headers-default pb-0"}>
							Trabalha com ajudante?
						</h1>
						<div className={"detail-list-container"}>
							<span className={"detail-list-item"}>
								{ajudanteSelected}
							</span>
						</div>

						{ajudante ? (
							<>
								<div className={"ajudant-container"}>
									<span className="login-span">
										Nome Completo
									</span>
									<div className={"detail-list-container"}>
										<span className={"detail-list-item"}>
											{ajudanteName}
										</span>
									</div>
								</div>
								<div className={"ajudant-container"}>
									<span className="login-span">
										Telefone com WhatsApp (número com DDD)
									</span>
									<MaskedInput
										id={"telephone"}
										type={"tel"}
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
											setAjudanteTelphone(e.target.value)
										}
										className={
											"ajusted-input revision-input"
										}
										autoComplete="off"
										disabled={true}
									/>
								</div>
							</>
						) : (
							<></>
						)}
						<h1 className={"headers-default pb-0"}>
							Com quais parceiros você trabalha atualmente?
						</h1>

						{loaderPartner ? (
							<></>
						) : (
							<div className={"detail-list-container"}>
								<span className={"detail-list-item"}>
									{state}
								</span>
							</div>
						)}
					</section>
				) : (
					<></>
				)}

				<footer className={"footer-default"}>
					<MobileStepper
						variant="dots"
						steps={1}
						position="static"
						activeStep={activeStep}
						className={classes.root}
						nextButton={<div className={"bnt-spacer"}></div>}
						backButton={
							<div
								onClick={handleBack}
								disabled={activeStep === 0}
								className="begin-btn-container"
							>
								<div className={"go-back-button"}>Voltar</div>
							</div>
						}
					/>
				</footer>
			</Container>
		</Slide>
	);

	function handleBack() {
		localStorage.setItem("ConcludeEtapaView", "ATE");
		window.location.reload();
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
		if (savedPartner.length <= 0) {
			setState([" - "]);
		} else {
			savedPartner[savedPartner.length - 1] = savedPartner[
				savedPartner.length - 1
			].substring(0, savedPartner[savedPartner.length - 1].length - 2);
			setState(savedPartner);
		}
	}

	function handleSavedPartners(parner, savedPartnerArray, label) {
		if (parner) {
			return [...savedPartnerArray, label + ", "];
		} else {
			return savedPartnerArray;
		}
	}
}
