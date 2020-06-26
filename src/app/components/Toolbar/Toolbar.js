import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";
import MaskedInput from "react-text-mask";

import { ContactController } from "../../controllers/UserController";

import MenuIcon from "@material-ui/icons/Menu";
import ExitToApp from "@material-ui/icons/ExitToApp";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import LogoPremium from "../../assets/images/logo.png";
import LogoPizza from "../../assets/images/logo-pizza.svg";
import IconWhatsapp from "../../assets/images/whatsapp-icon.png";
import IconUser from "../../assets/images/user-icon.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import BuildIcon from "@material-ui/icons/Build";
import SettingsIcon from "@material-ui/icons/Settings";
import DescriptionIcon from "@material-ui/icons/Description";

import { createHashHistory } from "history";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
	list: {
		width: 270,
	},
	fullList: {
		width: "auto",
	},
});

// MODAL STYLE

function getModalStyle() {
	const top = 50;
	const left = 50;
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}
// END MODAL STYLE

export const history = createHashHistory();

export default function TemporaryDrawer(props) {
	useEffect(() => {}, []);

	const [telephoneDrawer, setTelephoneDrawer] = useState("55");
	const [nameDrawer, setNameDrawer] = useState("");
	const [emailDrawer, setEmailDrawer] = useState("");
	const [subjectDrawer, setSubjectDrawer] = useState("");
	const [errorMessageDrawer, setErrorMessageDrawer] = useState(false);
	const [successMessageDrawer, setSuccessMessageDrawer] = useState(false);
	const [messageDrawer, setMessageDrawer] = useState(
		"Preencha os dados corretamente"
	);
	const [disableDrawerButton, setDisableDrawerButton] = useState("inherit");

	const [telephoneModal, setTelephoneModal] = useState("55");
	const [nameModal, setNameModal] = useState("");
	const [emailModal, setEmailModal] = useState("");
	const [subjectModal, setSubjectModal] = useState("");
	const [errorMessageModal, setErrorMessageModal] = useState(false);
	const [successMessageModal, setSuccessMessageModal] = useState(false);
	const [messageModal, setMessageModal] = useState(
		"Preencha os dados corretamente"
	);
	const [disableModalButton, setDisableModalButton] = useState("inherit");

	const [stateForm, setStateForm] = React.useState({
		bottom: false,
	});

	const toggleDrawerForm = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		if (open === false) {
			clearDrawerForm();
		}

		setStateForm({ ...stateForm, [anchor]: open });
	};

	const classes = useStyles();
	const [state, setState] = useState({
		right: false,
	});

	const toggleDrawer = (side, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState({ ...state, [side]: open });
	};

	// SIMPLE MENU
	const [parentMenuOne, setParentMenuOne] = useState(false);

	const handleClickMenuOne = (event) => {
		setParentMenuOne(true);
		setParentMenuTwo(false);
	};

	const handleCloseMenuOne = () => {
		setParentMenuOne(false);
	};

	const [parentMenuTwo, setParentMenuTwo] = useState(false);

	const handleClickMenuTwo = (event) => {
		setParentMenuTwo(true);
		setParentMenuOne(false);
	};

	const handleCloseMenuTwo = () => {
		setParentMenuTwo(false);
	};
	// END SIMPLE MENU

	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List className="sidebar-drawer">
				{JSON.parse(localStorage.getItem("UserData")) === null ? (
					<>
						<ListItem button>
							<NavLink
								className={"link-sidebar"}
								to={"../../../../../../../../../login"}
							>
								<ListItemIcon>
									<AccountCircleIcon
										className={"sidebar-icon"}
									/>
								</ListItemIcon>
								<ListItemText primary={"Login/Senha"} />
							</NavLink>
						</ListItem>
						<ListItem
							onClick={toggleDrawerForm("bottom", true)}
							button
						>
							<PhoneIcon>
								<AccountCircleIcon className={"sidebar-icon"} />
							</PhoneIcon>
							<ListItemText primary={"Fale Conosco"} />
						</ListItem>
					</>
				) : (
					<>
						<ListItem button>
							<NavLink
								className={"link-sidebar"}
								to={"../../../../../../../../../bem-vindo"}
							>
								<ListItemIcon>
									<ChromeReaderModeIcon
										className={"sidebar-icon"}
									/>
								</ListItemIcon>
								<ListItemText primary={"Seja Bem-Vindo"} />
							</NavLink>
						</ListItem>
						<ListItem button>
							<NavLink
								className={"link-sidebar"}
								to={"../../../../../../../../../home"}
							>
								<AccountCircleIcon>
									<ChromeReaderModeIcon
										className={"sidebar-icon"}
									/>
								</AccountCircleIcon>
								<ListItemText primary={"Perfil"} />
							</NavLink>
						</ListItem>
						<ListItem button>
							<NavLink
								className={"link-sidebar"}
								to={"../../../../../../../../../progresso"}
							>
								<ListItemIcon>
									<PlaylistAddCheckIcon
										className={"sidebar-icon"}
									/>
								</ListItemIcon>
								<ListItemText primary={"Seu Progresso"} />
							</NavLink>
						</ListItem>

						<ListItem button>
							<NavLink
								className={"link-sidebar"}
								to={
									"../../../../../../../../../galeria-de-video"
								}
							>
								<VideoLibraryIcon>
									<ChromeReaderModeIcon
										className={"sidebar-icon"}
									/>
								</VideoLibraryIcon>
								<ListItemText
									primary={"Saiba Mais sobre a MMS"}
								/>
							</NavLink>
						</ListItem>

						{JSON.parse(localStorage.getItem("UserData")).etapa ===
						"apr" ? (
							<>
								<ListItem button>
									<NavLink
										className={"link-sidebar"}
										to={
											"../../../../../../../../../ead/trilhas"
										}
									>
										<BuildIcon>
											<ChromeReaderModeIcon
												className={"sidebar-icon"}
											/>
										</BuildIcon>
										<ListItemText
											primary={"Simulador TOA"}
										/>
									</NavLink>
								</ListItem>
								<ListItem button>
									<NavLink
										className={"link-sidebar"}
										to={
											"../../../../../../../../../../videos-sobre-o-toa"
										}
									>
										<VideoLibraryIcon>
											<ChromeReaderModeIcon
												className={"sidebar-icon"}
											/>
										</VideoLibraryIcon>
										<ListItemText
											primary={"Vídeos sobre o TOA"}
										/>
									</NavLink>
								</ListItem>
								<ListItem button>
									<div
										className={"link-sidebar"}
										onClick={() =>
											window.open(
												"https://mms.etadirect.com/",
												"_blank"
											)
										}
									>
										<FilterDramaIcon>
											<ChromeReaderModeIcon
												className={"sidebar-icon"}
											/>
										</FilterDramaIcon>
										<ListItemText primary={"TOA"} />
									</div>
								</ListItem>
								<ListItem button>
									<div
										className={"link-sidebar"}
										onClick={() =>
											window.open(
												"https://prestador.juvo.com.br/#/",
												"_blank"
											)
										}
									>
										<SettingsIcon>
											<ChromeReaderModeIcon
												className={"sidebar-icon"}
											/>
										</SettingsIcon>
										<ListItemText
											primary={"Controle Financeiro"}
										/>
									</div>
								</ListItem>
								<ListItem button>
									<NavLink
										className={"link-sidebar"}
										to={
											"../../../../../../../../../../contrato-de-intermediacao"
										}
									>
										<DescriptionIcon>
											<ChromeReaderModeIcon
												className={"sidebar-icon"}
											/>
										</DescriptionIcon>
										<ListItemText
											primary={
												"Contrato de intermediação"
											}
										/>
									</NavLink>
								</ListItem>
							</>
						) : (
							<></>
						)}

						<ListItem button>
							<NavLink
								className={"link-sidebar"}
								to={
									"../../../../../../../../../central-de-noticias"
								}
							>
								<ImportContactsIcon>
									<ChromeReaderModeIcon
										className={"sidebar-icon"}
									/>
								</ImportContactsIcon>
								<ListItemText primary={"Central de Notícias"} />
							</NavLink>
						</ListItem>

						<ListItem button>
							<div
								onClick={() => logout()}
								className={"link-sidebar"}
								to={"../../../../../../../../../login"}
							>
								<ListItemIcon>
									<ExitToApp className={"sidebar-icon"} />
								</ListItemIcon>
								<ListItemText primary={"Sair"} />
							</div>
						</ListItem>
					</>
				)}
			</List>
		</div>
	);

	// MODAL
	const [modalStyle] = React.useState(getModalStyle());
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		clearModalForm();
	};
	// END MODAL

	// NAVBAR MENU
	const navList = () => (
		<List className="navbar-menu">
			{JSON.parse(localStorage.getItem("UserData")) === null ? (
				<>
					<Button
						className="navbar-button navbar-contact"
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleOpen}
					>
						Fale Conosco
						<img alt={""} src={IconWhatsapp} />
					</Button>
					<Button className="navbar-button navbar-title">
						Já sou cadastrado
					</Button>
					<NavLink
						className="navbar-button navbar-login"
						aria-controls="simple-menu"
						aria-haspopup="true"
						to={"../../../../../../../../../login"}
					>
						<span>Login/Senha</span>
						<img alt={""} src={IconUser} />
					</NavLink>
				</>
			) : (
				<>
					<NavLink
						className="navbar-button"
						aria-controls="simple-menu"
						aria-haspopup="true"
						to={"../../../../../../../../../bem-vindo"}
					>
						<span>Boas-Vindas</span>
					</NavLink>
					{/* Logado para baixo */}
					<Button
						className="navbar-button btn-z-index"
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleClickMenuOne}
						onMouseEnter={handleClickMenuOne}
					>
						Perfis
					</Button>

					<div
						style={
							parentMenuOne
								? { display: "block" }
								: { display: "none" }
						}
						className={"backdrop-nav-link"}
						onMouseEnter={handleCloseMenuOne}
					></div>
					<div
						style={
							parentMenuOne
								? { display: "block" }
								: { display: "none" }
						}
						className={"nav-list-container-profile"}
					>
						<MenuItem
							className={"nav-bar-itens"}
							onClick={handleCloseMenuOne}
						>
							<NavLink
								className={"link-sidebar"}
								to={"../../../../../../../../../progresso"}
							>
								<ListItemText primary={"Status de Cadastro"} />
							</NavLink>
						</MenuItem>
						<MenuItem
							className={"nav-bar-itens"}
							onClick={handleCloseMenuOne}
						>
							<NavLink
								className={"link-sidebar"}
								to={"../../../../../../../../../home"}
							>
								<ListItemText primary={"Dados de Cadastro"} />
							</NavLink>
						</MenuItem>
					</div>

					<Button
						className="navbar-button btn-z-index"
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleClickMenuTwo}
						onMouseEnter={handleClickMenuTwo}
					>
						Saiba Mais
					</Button>

					<div
						style={
							parentMenuTwo
								? { display: "block" }
								: { display: "none" }
						}
						className={"backdrop-nav-link"}
						onMouseEnter={handleCloseMenuTwo}
					></div>
					<div
						style={
							parentMenuTwo
								? { display: "block" }
								: { display: "none" }
						}
						className={"nav-list-container"}
					>
						<MenuItem
							className={"nav-bar-itens"}
							onClick={handleCloseMenuTwo}
						>
							<NavLink
								className={"link-sidebar"}
								to={
									"../../../../../../../../../galeria-de-video"
								}
							>
								<ListItemText
									primary={"Saiba Mais sobre a MMS"}
								/>
							</NavLink>
						</MenuItem>

						{JSON.parse(localStorage.getItem("UserData")).etapa ===
						"apr" ? (
							<>
								<MenuItem
									className={"nav-bar-itens"}
									onClick={handleCloseMenuTwo}
								>
									<NavLink
										className={"link-sidebar"}
										to={
											"../../../../../../../../../ead/trilhas"
										}
									>
										<ListItemText
											primary={"Simulador TOA"}
										/>
									</NavLink>
								</MenuItem>
								<MenuItem
									className={"nav-bar-itens"}
									onClick={handleCloseMenuTwo}
								>
									<NavLink
										className={"link-sidebar"}
										to={
											"../../../../../../../../../../videos-sobre-o-toa"
										}
									>
										<ListItemText
											primary={"Vídeos sobre o TOA"}
										/>
									</NavLink>
								</MenuItem>
								<MenuItem
									className={"nav-bar-itens"}
									onClick={handleCloseMenuTwo}
								>
									<div
										className={"link-sidebar"}
										onClick={() =>
											window.open(
												"https://mms.etadirect.com/",
												"_blank"
											)
										}
									>
										<ListItemText primary={"TOA"} />
									</div>
								</MenuItem>
								<MenuItem
									className={"nav-bar-itens"}
									onClick={handleCloseMenuTwo}
								>
									<div
										className={"link-sidebar"}
										onClick={() =>
											window.open(
												"https://prestador.juvo.com.br/#/",
												"_blank"
											)
										}
									>
										<ListItemText
											primary={"Controle Financeiro"}
										/>
									</div>
								</MenuItem>
								<MenuItem
									className={"nav-bar-itens"}
									onClick={handleCloseMenuTwo}
								>
									<NavLink
										className={"link-sidebar"}
										to={
											"../../../../../../../../../../contrato-de-intermediacao"
										}
									>
										<ListItemText
											primary={
												"Contrato de intermediação"
											}
										/>
									</NavLink>
								</MenuItem>
							</>
						) : (
							<></>
						)}

						<MenuItem
							className={"nav-bar-itens"}
							onClick={handleCloseMenuTwo}
						>
							<NavLink
								className={"link-sidebar"}
								to={
									"../../../../../../../../../central-de-noticias"
								}
							>
								<ListItemText primary={"Central de Notícias"} />
							</NavLink>
						</MenuItem>
					</div>
					<Button
						className="navbar-button"
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={() => logout()}
					>
						Sair
					</Button>
				</>
			)}
		</List>
	);
	// END NAVBAR MENU

	return (
		<>
			<header className={"toolbar_parent"}>
				<div id={"toolbar_container"} className={"toolbar_container"}>
					<NavLink className={"toolbar_link"} to="/">
						<img
							className={"toolbar_img"}
							alt={"Logo-Premium"}
							src={LogoPizza}
						/>
						<h1>Pede Pizza</h1>
					</NavLink>

					{navList()}

					<Button
						title={""}
						id={"sidebar_btn"}
						className={"sidebar-btn"}
						onClick={() => handleClick()}
					>
						<MenuIcon />
					</Button>
					<Drawer
						anchor="right"
						open={state.right}
						onClose={toggleDrawer("right", false)}
					>
						{sideList("right")}
					</Drawer>
				</div>
			</header>

			<Drawer
				anchor="bottom"
				open={stateForm["bottom"]}
				onClose={toggleDrawerForm("bottom", false)}
			>
				<div className="contact-modal contact-drawer">
					<h2>
						Entrar em contato
						<span onClick={toggleDrawerForm("bottom", false)}>
							X
						</span>
					</h2>
					<p className="black-paragraph">
						Tire suas dúvidas sobre o nosso serviço.
					</p>
					<p className="orange-paragraph">
						Informe os dados abaixo e em breve entraremos em contato
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
						Sua solicitação foi enviada, entraremos em contato em
						breve
					</label>
					<div className="form-group">
						<input
							value={nameDrawer}
							onChange={(e) => setNameDrawer(e.target.value)}
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
							value={telephoneDrawer}
							onChange={(e) => setTelephoneDrawer(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							value={emailDrawer}
							onChange={(e) => setEmailDrawer(e.target.value)}
							type={"text"}
							maxLength={50}
							placeholder="E-mail (Opcional)"
						/>
					</div>
					<div className="form-group">
						<textarea
							value={subjectDrawer}
							onChange={(e) => setSubjectDrawer(e.target.value)}
							rows={"3"}
							placeholder={"Assunto"}
							maxLength={400}
						></textarea>
					</div>
					<button
						onClick={() => handleClickContact()}
						className={"modal-submit"}
						style={{
							pointerEvents: disableDrawerButton,
						}}
					>
						<span>Enviar</span>
					</button>
				</div>
			</Drawer>
		</>
	);

	function handleClick() {
		setState({ ...state, right: true });
	}

	function logout() {
		if (localStorage.getItem("CovidModal") === "Open") {
			localStorage.clear();
			localStorage.setItem("CovidModal", "Open");
		} else {
			localStorage.clear();
		}
		document.location.href = "#/";
		setTimeout(() => {
			document.location.reload();
		}, 50);
	}

	async function handleClickContact() {
		if (telephoneDrawer.replace(/[_]+/g, "").length >= 10) {
			let ddi = telephoneDrawer.split(" ")[0].replace("+", "");
			let ddd = telephoneDrawer.split(" ")[1].replace("(", "");
			ddd = ddd.replace(")", "");
			let telephoneDrawerValue =
				ddi + ddd + telephoneDrawer.split(" ")[2].replace("-", "");
			// if (telephoneModalValue.length === 12 && nameModal.length >= 1) {
			if (nameDrawer.length >= 1) {
				const currentDate = currentDateFormatter();
				const contactLabel = {
					nome: nameDrawer,
					telefone: telephoneDrawerValue,
					email: emailDrawer,
					dataenvio: currentDate,
					assunto: subjectDrawer,
				};
				const response = await ContactController(contactLabel);
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
				}, 5000);
				break;
			case "201":
				clearDrawerForm();
				setSuccessMessageDrawer(true);
				setTimeout(() => {
					setSuccessMessageDrawer(false);
				}, 5000);
				break;
			case "400":
				handleErrorDrawer(localStorage.getItem("ErrorMessage"));
				break;
			case "403":
				handleErrorDrawer(localStorage.getItem("ErrorMessage"));
				break;
			case "500":
				handleErrorDrawer(
					"Ocorreu um erro inesperado, tente novamente mais tarde"
				);
				break;
			default:
				handleErrorDrawer("Preencha os dados corretamente");
				break;
		}
		setDisableDrawerButton("inherit");
	}

	function handleErrorDrawer(message) {
		setErrorMessageDrawer(true);
		setMessageDrawer(message);
	}

	function clearDrawerForm() {
		setTelephoneDrawer("");
		setNameDrawer("");
		setEmailDrawer("");
		setSubjectDrawer("");
		setErrorMessageDrawer(false);
		setMessageDrawer("Preencha os dados corretamente");
	}

	//

	async function handleClickContactModal() {
		setDisableModalButton("none");
		if (telephoneModal.replace(/[_]+/g, "").length >= 9) {
			let ddi = telephoneModal.split(" ")[0].replace("+", "");
			let ddd = telephoneModal.split(" ")[1].replace("(", "");
			ddd = ddd.replace(")", "");
			let telephoneModalValue =
				ddi + ddd + telephoneModal.split(" ")[2].replace("-", "");
			// if (telephoneModalValue.length === 12 && nameModal.length >= 1) {
			if (nameModal.length >= 1) {
				const currentDate = currentDateFormatter();
				const contactLabel = {
					nome: nameModal,
					telefone: telephoneModalValue,
					email: emailModal,
					dataenvio: currentDate,
					assunto: subjectModal,
				};
				setDisableDrawerButton("");
				const response = await ContactController(contactLabel);
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
				}, 5000);
				break;
			case "201":
				clearModalForm();
				setSuccessMessageModal(true);
				setTimeout(() => {
					setSuccessMessageModal(false);
				}, 5000);
				break;
			case "400":
				handleErrorModal(localStorage.getItem("ErrorMessage"));
				break;
			case "403":
				handleErrorModal(localStorage.getItem("ErrorMessage"));
				break;
			case "500":
				handleErrorModal(
					"Ocorreu um erro inesperado, tente novamente mais tarde"
				);
				break;
			default:
				handleErrorModal("Preencha os dados corretamente");
				break;
		}
		setDisableModalButton("inherit");
	}

	function handleErrorModal(message) {
		setErrorMessageModal(true);
		setMessageModal(message);
	}

	function clearModalForm() {
		setTelephoneModal("");
		setNameModal("");
		setEmailModal("");
		setSubjectModal("");
		setErrorMessageModal(false);
		setMessageModal("Preencha os dados corretamente");
	}

	function currentDateFormatter() {
		var data = new Date(),
			dia = data.getDate().toString(),
			diaF = dia.length === 1 ? "0" + dia : dia,
			mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
			mesF = mes.length === 1 ? "0" + mes : mes,
			anoF = data.getFullYear(),
			all = diaF + "/" + mesF + "/" + anoF;
		return all;
	}
}
