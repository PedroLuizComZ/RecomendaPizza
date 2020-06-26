import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Modal from "@material-ui/core/Modal";
import MaskedInput from "react-text-mask";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/loader/Loader";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { PreCadController } from "../../controllers/UserController";
import { NavLink } from "react-router-dom";

// Images
import InformationIcon1 from "../../assets/images/information-icons/information-icon1.png";
import InformationIcon2 from "../../assets/images/information-icons/information-icon2.png";
import InformationIcon3 from "../../assets/images/information-icons/information-icon3.png";
import InformationIcon4 from "../../assets/images/information-icons/information-icon4.png";
import InformationIcon5 from "../../assets/images/information-icons/information-icon5.png";
import InformationIcon6 from "../../assets/images/information-icons/information-icon6.png";
import BackgroundTools from "../../assets/images/tools.jpg";

import Slide from "@material-ui/core/Slide";

function getModalStyle() {
	const top = 50;
	const left = 50;
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		position: "absolute",
		width: 450,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4, 4, 4),
	},
}));

function Third(props) {
	const [hide, setHide] = useState("block");
	const [hide1, setHide1] = useState("none");

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		const elements = document.getElementsByClassName("loader-ring");
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.borderColor =
				"#2e2b84 transparent transparent transparent";
		}
	}, []);

	const [telephoneModal, setTelephoneModal] = useState("");
	const [nameModal, setNameModal] = useState("");
	const [emailModal, setEmailModal] = useState("");
	const [errorMessageModal, setErrorMessageModal] = useState(false);
	const [successMessageModal, setSuccessMessageModal] = useState(false);
	const [messageModal, setMessageModal] = useState(
		"Preencha os dados corretamente"
	);
	const [disableModalButton, setDisableModalButton] = useState("inherit");

	const [telephoneDrawer, setTelephoneDrawer] = useState("");
	const [nameDrawer, setNameDrawer] = useState("");
	const [emailDrawer, setEmailDrawer] = useState("");
	const [errorMessageDrawer, setErrorMessageDrawer] = useState(false);
	const [successMessageDrawer, setSuccessMessageDrawer] = useState(false);
	const [messageDrawer, setMessageDrawer] = useState(
		"Preencha os dados corretamente"
	);
	const [disableDrawerButton, setDisableDrawerButton] = useState("inherit");

	function loadAfterImage() {
		setTimeout(function () {
			var img = new Image();
			img.onload = function () {
				setHide("none");
				setHide1("block");
			};
			img.src = BackgroundTools;
		}, 1);
	}

	function ShowWindowDimensions(props) {
		const [width, height] = [window.innerWidth, window.innerHeight];

		var windowHeight = "";
		var paddingTop = "";

		if (width > 991) {
			windowHeight = height - 112 + "px";
			// paddingTop = "112px";
		} else {
			windowHeight = height - 56 + "px";
		}

		if (props === "padding") {
			const heightStyle = {
				paddingTop: paddingTop,
			};

			return heightStyle;
		}

		const heightStyle = {
			height: windowHeight,
		};

		return heightStyle;
	}

	// END RESIZE WINDOW

	// MODAL

	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const [openSecond, setSecondOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleSecondOpen = () => {
		setSecondOpen(true);
	};

	const handleSecondClose = () => {
		setSecondOpen(false);
		setErrorMessageModal(false);
		clearModalForm();
	};

	// END MODAL

	// DRAWER

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		document.location.href = "#/pre-cadastro";
	};

	const [stateSecond, setStateSecond] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleSecondDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		if (open === false) {
			clearDrawerForm();
		}

		setStateSecond({ ...stateSecond, [anchor]: open });
	};

	// END DRAWER

	return (
		<>
			<div style={{ display: hide }}>
				<Loader />
			</div>
			<Slide
				direction="left"
				in={true}
				style={{ display: hide1 }}
				mountOnEnter
				unmountOnExit
			>
				<section className="contact-page">
					<div
						id={"background-image"}
						className="contact-banner"
						style={ShowWindowDimensions()}
					>
						<div className="banner-links" onLoad={loadAfterImage()}>
							<h1>Conectamos você aos clientes!</h1>
							<div className="contact-buttons">
								<NavLink to="pre-cadastro">
									<Button
										className="for-desktop"
										variant="contained"
										color="primary"
									>
										Quero fazer parte!
									</Button>
								</NavLink>
								<Button
									className="for-desktop"
									variant="contained"
									color="primary"
									onClick={handleSecondOpen}
								>
									<span className={"about-equal-size"}>
										Quero indicar
									</span>
								</Button>
								<Button
									className="for-mobile"
									onClick={toggleDrawer("bottom", true)}
								>
									Quero fazer parte!
								</Button>
								<Button
									className="for-mobile"
									onClick={toggleSecondDrawer("bottom", true)}
								>
									<span className={"about-equal-size-mobile"}>
										Quero indicar
									</span>
								</Button>
							</div>
						</div>
						<div className={"more-info-container--same-side"}>
							<span className={"more-info-text"}>Saiba mais</span>
							<ExpandMoreIcon />
						</div>
					</div>
					<div className="more-information">
						<div className="pro-information">
							<h2
								className={"remove-padding-top structure-title"}
							>
								Com a <b>MMS</b> você pode mais!
							</h2>
							<div className="pro-information-icons">
								<div className="information-icon">
									<img alt="" src={InformationIcon1}></img>
									<p>
										Você precisa ter uma
										<br />
										empresa aberta, com CNPJ,
										<br /> e emitir nota fiscal.
									</p>
								</div>
								<div className="information-icon">
									<img alt="" src={InformationIcon2}></img>
									<p>
										Tenha serviço o ano inteiro!
										<br />
										São mais de 1 milhão de serviços
										<br />
										ao ano, em todo o país!
									</p>
								</div>
								<div className="information-icon">
									<img alt="" src={InformationIcon3}></img>
									<p>
										Liberdade de agenda!
										<br />
										Você escolhe os períodos e
										<br />
										regiões onde deseja trabalhar.
									</p>
								</div>
								<div className="information-icon">
									<img alt="" src={InformationIcon4}></img>
									<p>
										Aumente a sua renda de
										<br />
										acordo com o rendimento
										<br />
										do seu tempo.
									</p>
								</div>
								<div className="hide-box information-icon" />
								<div className="information-icon">
									<img alt="" src={InformationIcon5}></img>
									<p>
										Receba a cada
										<br />
										15 dias.
									</p>
								</div>
								<div className="information-icon">
									<img alt="" src={InformationIcon6}></img>
									<p>
										Central de
										<br />
										Atendimento Exclusiva.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={"call-to-action-container contact-banner"}>
						<h1 className={"bigger-text"}>
							Conectamos você aos clientes!
						</h1>
						<div className={"call-to-action-btn-container"}>
							<Button
								className={"btn-public"}
								onClick={toggleDrawer("bottom", true)}
							>
								Quero fazer parte!
							</Button>
							<Button
								className={"btn-public"}
								onClick={toggleSecondDrawer("bottom", true)}
							>
								<span className={"about-equal-size-mobile"}>
									Quero indicar
								</span>
							</Button>
						</div>
					</div>
					<Drawer
						anchor="bottom"
						open={state["bottom"]}
						onClose={toggleDrawer("bottom", false)}
					>
						<div className="contact-modal contact-drawer">
							<h2>
								Quero fazer parte!
								<span onClick={toggleDrawer("bottom", false)}>
									X
								</span>
							</h2>
							<p className="black-paragraph">
								Faça parte da maior rede de montadores de móveis
								do Brasil, e a que mais conecta profissionais
								aos clientes.
							</p>
							<p className="orange-paragraph">
								informe os dados abaixo e siga as instruções
							</p>
							<div className="form-group">
								<input
									type="text"
									placeholder="Nome completo"
									maxLength={100}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									placeholder="Telefone (Whatsapp)"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									placeholder="E-mail"
									maxLength={50}
								/>
							</div>
							<input type="submit" value="Enviar" />
						</div>
					</Drawer>
					{/* Indicar Alguém */}
					<Drawer
						anchor="bottom"
						open={stateSecond["bottom"]}
						onClose={toggleSecondDrawer("bottom", false)}
					>
						<div className="contact-modal contact-drawer">
							<h2>
								Quero indicar
								<span
									onClick={toggleSecondDrawer(
										"bottom",
										false
									)}
								>
									X
								</span>
							</h2>
							<p className="black-paragraph">
								Agora que você já conhece mais sobre a MMS, que
								tal indicar seus amigos montadores de móveis
								para fazerem parte desta rede assim como você?
							</p>
							<p className="orange-paragraph">
								Nos informe os dados abaixo, e em breve o
								contataremos.
							</p>
							<label
								style={
									errorMessageDrawer
										? { display: "block" }
										: { display: "none" }
								}
								className={"error-message"}
							>
								{messageDrawer}
							</label>
							<label
								style={
									successMessageDrawer
										? { display: "block" }
										: { display: "none" }
								}
								className={"success-message"}
							>
								Agradeço a sua indicação!
							</label>
							<div className="form-group">
								<input
									value={nameDrawer}
									onChange={(e) =>
										setNameDrawer(e.target.value)
									}
									type={"text"}
									maxLength={100}
									placeholder="Nome"
								/>
							</div>
							<div className="form-group">
								<MaskedInput
									type={"tel"}
									placeholder={"Telefone (Whatsapp)"}
									mask={[
										"+",
										"5",
										"5",
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
									value={telephoneDrawer}
									onChange={(e) =>
										setTelephoneDrawer(e.target.value)
									}
								/>
							</div>
							<button
								onClick={() => handleClickCadDrawer()}
								className={"modal-submit"}
								style={{
									pointerEvents: disableDrawerButton,
								}}
							>
								<span>Enviar</span>
							</button>
						</div>
					</Drawer>
					<Modal
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						open={open}
						onClose={handleClose}
						className="contact-modal"
					>
						<div style={modalStyle} className={classes.paper}>
							<h2>
								Quero fazer parte!
								<span onClick={handleClose}>X</span>
							</h2>
							<p className="black-paragraph">
								Faça parte da maior rede de montadores de móveis
								do Brasil, e a que mais conecta profissionais
								aos clientes.
							</p>
							<p className="orange-paragraph">
								informe os dados abaixo e siga as instruções
							</p>
							<div className="form-group">
								<input
									type="text"
									placeholder="Nome completo"
									maxLength={100}
								/>
							</div>
							<div className="form-group">
								<MaskedInput
									type={"tel"}
									placeholder={"Telefone (Whatsapp)"}
									mask={[
										"+",
										"5",
										"5",
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
									value={telephoneModal}
									onChange={(e) =>
										setTelephoneModal(e.target.value)
									}
									className={"pre-cad-input"}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									placeholder="E-mail"
									maxLength={50}
								/>
							</div>
							<input type="submit" value="Enviar" />
						</div>
					</Modal>
					{/* Indicar Alguém */}
					<Modal
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						open={openSecond}
						onClose={handleSecondClose}
						className="contact-modal"
					>
						<div style={modalStyle} className={classes.paper}>
							<h2>
								Quero indicar
								<span onClick={handleSecondClose}>X</span>
							</h2>
							<p className="black-paragraph">
								Agora que você já conhece mais sobre a MMS, que
								tal indicar seus amigos montadores de móveis
								para fazerem parte desta rede assim como você?
							</p>
							<p className="orange-paragraph">
								Nos informe os dados abaixo, e em breve o
								contataremos.
							</p>
							<label
								style={
									errorMessageModal
										? { display: "block" }
										: { display: "none" }
								}
								className={"error-message"}
							>
								{messageModal}
							</label>
							<label
								style={
									successMessageModal
										? { display: "block" }
										: { display: "none" }
								}
								className={"success-message"}
							>
								Agradeço a sua indicação!
							</label>
							<div className="form-group">
								<input
									value={nameModal}
									onChange={(e) =>
										setNameModal(e.target.value)
									}
									type={"text"}
									maxLength={100}
									placeholder="Nome"
									autoComplete="off"
								/>
							</div>
							<div className="form-group">
								<MaskedInput
									type={"tel"}
									mask={[
										"+",
										"5",
										"5",
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
									value={telephoneModal}
									onChange={(e) =>
										setTelephoneModal(e.target.value)
									}
									placeholder="Telefone (Whatsapp)"
									autoComplete="off"
								/>
							</div>
							<button
								onClick={() => handleClickCadModal()}
								className={"modal-submit"}
								style={{
									pointerEvents: disableModalButton,
								}}
							>
								<span>Enviar</span>
							</button>
						</div>
					</Modal>
					<Footer />
				</section>
			</Slide>
		</>
	);

	async function handleClickCadModal() {
		setDisableModalButton("none");
		if (telephoneModal.replace(/[_]+/g, "").length >= 19) {
			let ddi = telephoneModal.split(" ")[0].replace("+", "");
			let ddd = telephoneModal.split(" ")[1].replace("(", "");
			ddd = ddd.replace(")", "");
			let telephoneModalValue = telephoneModal
				.split(" ")[2]
				.replace("-", "");
			if (
				telephoneModalValue.length === 9 &&
				ddi.length >= 2 &&
				ddd.length >= 2 &&
				nameModal.length >= 1
			) {
				const preCadLabel = {
					ddi: ddi,
					ddd: ddd,
					celular: telephoneModalValue,
					nmusuario: nameModal,
					email: emailModal,
					flindica: "sim",
				};
				const response = await PreCadController(preCadLabel);
				handleResponseModal(response);
			} else {
				handleErrorModal("Preencha os dados corretamente");
				setDisableModalButton("inherit");
			}
		} else {
			handleErrorModal("Preencha os dados corretamente");
			setDisableModalButton("inherit");
		}
	}

	function handleResponseModal(response) {
		switch (response) {
			case "200":
				clearModalForm();
				setSuccessMessageModal(true);
				setTimeout(() => {
					setSuccessMessageModal(false);
					setDisableModalButton("inherit");
				}, 3000);
				break;
			case "201":
				clearModalForm();
				setSuccessMessageModal(true);
				setTimeout(() => {
					setSuccessMessageModal(false);
					setDisableModalButton("inherit");
				}, 5000);
				break;
			case "400":
				handleErrorModal(localStorage.getItem("ErrorMessage"));
				setDisableModalButton("inherit");
				break;
			case "403":
				handleErrorModal(localStorage.getItem("ErrorMessage"));
				setDisableModalButton("inherit");
				break;
			default:
				handleErrorModal("Preencha os dados corretamente");
				setDisableModalButton("inherit");
				break;
		}
	}

	function handleErrorModal(message) {
		setErrorMessageModal(true);
		setMessageModal(message);
	}

	function clearModalForm() {
		setTelephoneModal("");
		setNameModal("");
		setEmailModal("");
		setErrorMessageModal(false);
		setMessageModal("Preencha os dados corretamente");
	}

	async function handleClickCadDrawer() {
		setDisableDrawerButton("none");
		if (telephoneDrawer.replace(/[_]+/g, "").length >= 19) {
			let ddi = telephoneDrawer.split(" ")[0].replace("+", "");
			let ddd = telephoneDrawer.split(" ")[1].replace("(", "");
			ddd = ddd.replace(")", "");
			let telephoneDrawerValue = telephoneDrawer
				.split(" ")[2]
				.replace("-", "");
			if (
				telephoneDrawerValue.length === 9 &&
				ddi.length >= 2 &&
				ddd.length >= 2 &&
				nameDrawer.length >= 1
			) {
				const preCadLabel = {
					ddi: ddi,
					ddd: ddd,
					celular: telephoneDrawerValue,
					nmusuario: nameDrawer,
					email: emailDrawer,
					flindica: "sim",
				};
				const response = await PreCadController(preCadLabel);
				handleResponseDrawer(response);
			} else {
				handleErrorDrawer("Preencha os dados corretamente");
				setDisableDrawerButton("inherit");
			}
		} else {
			handleErrorDrawer("Preencha os dados corretamente");
			setDisableDrawerButton("inherit");
		}
	}

	function handleResponseDrawer(response) {
		switch (response) {
			case "200":
				clearDrawerForm();
				setSuccessMessageDrawer(true);
				setTimeout(() => {
					setSuccessMessageDrawer(false);
					setDisableDrawerButton("inherit");
				}, 3000);
				break;
			case "201":
				clearDrawerForm();
				setSuccessMessageDrawer(true);
				setTimeout(() => {
					setSuccessMessageDrawer(false);
					setDisableDrawerButton("inherit");
				}, 3000);
				break;
			case "401":
				handleErrorDrawer(localStorage.getItem("ErrorMessage"));
				setDisableDrawerButton("inherit");
				break;
			case "400":
				handleErrorDrawer(localStorage.getItem("ErrorMessage"));
				setDisableDrawerButton("inherit");
				break;
			case "403":
				handleErrorDrawer(localStorage.getItem("ErrorMessage"));
				setDisableDrawerButton("inherit");
				break;
			default:
				handleErrorDrawer("Preencha os dados corretamente");
				setDisableDrawerButton("inherit");
				break;
		}
	}

	function handleErrorDrawer(message) {
		setErrorMessageDrawer(true);
		setMessageDrawer(message);
	}

	function clearDrawerForm() {
		setTelephoneDrawer("");
		setNameDrawer("");
		setEmailDrawer("");
		setErrorMessageDrawer(false);
		setMessageDrawer("Preencha os dados corretamente");
	}
}

export default Third;
