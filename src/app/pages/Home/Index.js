import React, { useEffect, useState } from "react";

import { Container } from "./Styles";

import Avatar from "@material-ui/core/Avatar";
import Icon from "../../assets/images/person-profile.png";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import PerfilProfissionalLogo from "../../assets/images/perfilprofissional-01.png";
import PerfilAtentimentoLogo from "../../assets/images/perfildeatendimento-01.png";
import PerfilEmpresarialLogo from "../../assets/images/perfilempresarial-01.png";
import Check from "../../assets/images/check.svg";
import Alert from "../../assets/images/alert.svg";
import Close from "../../assets/images/close-alt.svg";
import Logo from "../../assets/images/logo192.png";

import Atendimento from "../Profiles/Atendimento/Index";
import Empresarial from "../Profiles/Empresarial/Index";
import Profissional from "../Profiles/Profissional/Index";

import {
	UserInfoController,
	ProfileImageController,
} from "../../controllers/UserController";
import Slide from "@material-ui/core/Slide";

export default function Home(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		try {
			handleStart(UserData.idusuario);
		} catch (error) {
			props.history.push("/login");
		}
	}, []);

	const [loading, setLoading] = useState(true);
	const [checkModal, setCheckModal] = useState(true);
	const [alignment, setAlignment] = useState("0");
	const [tab, setTab] = useState("0");
	const [name, setName] = useState("");
	const [ddi, setDdi] = useState("");
	const [ddd, setDdd] = useState("");
	const [telephone, setTelephone] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [empresarialFull, setEmpresarialFull] = useState("");
	const [atendimentoFull, setAtendimentoFull] = useState("");
	const [profissionalFull, setProfissionalFull] = useState("");

	const [profileImage, setProfileImage] = useState(true);
	const [profileImageFile, setProfileImageFile] = useState("");
	const [possuiMei, setPossuiMei] = useState("");

	const [actualPage, setActualPage] = useState(
		localStorage.getItem("ActualPage")
	);

	const handleAlignment = (event, newAlignment) => {
		if (newAlignment !== null) {
			handleChoice(newAlignment);
		}
	};
	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"home-group main-content"}>
					<div className={"profile-container"}>
						<div className="profile-image">
							<Avatar className={"avatar-alt"}>
								<label
									style={
										profileImage
											? { display: "block" }
											: { display: "none" }
									}
									className={"image-input-file"}
									htmlFor="selecao-arquivo"
								></label>
								<input
									onChange={() => previewFile()}
									id="selecao-arquivo"
									type="file"
								/>
								<img
									style={
										profileImage
											? { display: "none" }
											: { display: "block" }
									}
									id={"image-profile"}
									src={Icon}
									alt={""}
									className={"icon-profile"}
									onClick={() => setProfileImage(true)}
								/>
							</Avatar>
						</div>
						<div className="profile-container-data">
							<h1 className="profile-name">{name}</h1>
							{cnpj !== "" ? (
								<span className="white-span">
									CNPJ{" "}
									{cnpj.substring(0, 2) +
										"." +
										cnpj.substring(2, 5) +
										"." +
										cnpj.substring(5, 8) +
										"/" +
										cnpj.substring(8, 12) +
										"-" +
										cnpj.substring(12, 14)}
								</span>
							) : (
								<></>
							)}
							<span className="white-span">
								{ddi !== "" &&
								ddi !== null &&
								ddd !== "" &&
								ddd !== null &&
								telephone !== "" &&
								telephone !== null
									? "+" + ddi + " (" + ddd + ") " + telephone
									: ""}
							</span>
						</div>
					</div>
					<ToggleButtonGroup
						value={alignment}
						exclusive
						onChange={handleAlignment}
						aria-label="text alignment"
					>
						<ToggleButton
							className={"multiselect-btn"}
							value="0"
							aria-label="right aligned"
						>
							<img
								className={"toggle-button-icon"}
								src={PerfilEmpresarialLogo}
								alt={""}
							/>
							{empresarialFull ? (
								possuiMei === "sim" ? (
									<img
										className={"check-icon"}
										src={Check}
										alt={""}
									/>
								) : (
									<img
										className={"check-icon-alert"}
										src={Alert}
										alt={""}
									/>
								)
							) : (
								<></>
							)}
						</ToggleButton>
						<ToggleButton
							className={"multiselect-btn"}
							value="1"
							aria-label="left aligned"
						>
							<img
								className={"toggle-button-icon"}
								src={PerfilAtentimentoLogo}
								alt={""}
							/>
							{atendimentoFull ? (
								<img
									className={"check-icon"}
									src={Check}
									alt={""}
								/>
							) : (
								<></>
							)}
						</ToggleButton>
						<ToggleButton
							className={"multiselect-btn"}
							value="2"
							aria-label="centered"
						>
							<img
								className={"toggle-button-icon"}
								src={PerfilProfissionalLogo}
								alt={""}
							/>
							{profissionalFull ? (
								<img
									className={"check-icon"}
									src={Check}
									alt={""}
								/>
							) : (
								<></>
							)}
						</ToggleButton>
					</ToggleButtonGroup>
					{tab === "0" ? <Empresarial /> : <></>}
					{tab === "1" ? <Atendimento /> : <></>}
					{tab === "2" ? <Profissional /> : <></>}
				</div>
				<div
					id="ios-container"
					onClick={() =>
						(document.getElementById(
							"ios-container"
						).style.display = "none")
					}
					className={"ios-message"}
					style={{ display: "none", top: "0 !important" }}
				>
					<section>
						<img className={"img-logo"} src={Logo} alt={""} />
						<p>
							Para instalar este app : Clique no botão abaixo e
							então escolha a opção "Adicionar á Tela Início"
						</p>
					</section>
					<img className={"times-image"} src={Close} alt={""} />
					<div></div>
				</div>
				<div style={{ display: "none" }} className={"ad2hs-prompt"}>
					<p className={"install-btn"}>
						Clique aqui para instalar o aplicativo
					</p>
					<img
						style={{ display: "none" }}
						className={"prompt-img"}
						onClick={(event) => handleClick(event)}
						src={Close}
						alt={""}
					/>
					<div></div>
				</div>
			</Container>
		</Slide>
	);

	async function handleStart(idUser) {
		const response = await UserInfoController({ idusuario: idUser });
		handleResponse(response);
	}

	function handleResponse(response) {
		switch (response.httpcode) {
			case "200":
				setLoading(false);
				const UserData = JSON.parse(localStorage.getItem("UserData"));
				document.getElementById("sidebar_btn").style.display = "block";
				document.getElementById("toolbar_container").style.display =
					"flex";
				handleUserData(UserData, response.image);
				handleAddToHome();
				break;
			default:
				console.log(response);
				break;
		}
	}

	function handleClick(event) {
		var a2hsBtn = document.querySelector(".ad2hs-prompt");
		a2hsBtn.style.display = "none";
		var image = document.querySelector(".prompt-img");
		image.style.display = "none";
		event.preventDefault();
		event.stopPropagation();
	}

	function handleAddToHome() {
		// valida se o dispositio é IOS e não esta instalado
		if (
			/iPad|iPhone|iPod/.test(navigator.userAgent) &&
			!window.MSStream &&
			!window.matchMedia("(display-mode: standalone)").matches
		) {
			document.getElementById("ios-container").style.display = "flex";
		} else {
			document.getElementById("ios-container").style.display = "none";
		}

		// Inicio do ADD To Home android
		var deferredPrompt;

		function showAddToHomeScreen() {
			if (checkModal) {
				var a2hsBtn = document.querySelector(".ad2hs-prompt");
				a2hsBtn.style.display = "flex";

				var image = document.querySelector(".prompt-img");
				image.style.display = "unset";

				a2hsBtn.addEventListener("click", addToHomeScreen);
				setCheckModal(false);
			}
		}

		function addToHomeScreen() {
			var image = document.querySelector(".prompt-img");
			image.style.display = "none";
			var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button
			a2hsBtn.style.display = "none"; // Show the prompt

			deferredPrompt.prompt(); // Wait for the user to respond to the prompt
			deferredPrompt.userChoice.then(function (choiceResult) {
				if (choiceResult.outcome === "accepted") {
					console.log("User accepted the A2HS prompt");
				} else {
					console.log("User dismissed the A2HS prompt");
				}
				deferredPrompt = null;
			});
		}

		window.addEventListener("beforeinstallprompt", function (e) {
			// Prevent Chrome 67 and earlier from automatically showing the prompt
			e.preventDefault();
			// Stash the event so it can be triggered later.
			deferredPrompt = e;
			showAddToHomeScreen();
		});

		// Fim do ADD To Home android
	}

	function handleUserData(UserData, image) {
		setName(UserData.nmusuario);
		setDdi(UserData.ddi);
		setDdd(UserData.ddd);
		setTelephone(UserData.celular);
		if (UserData.cnpj !== "") setCnpj(UserData.cnpj);
		let actualPageValue = actualPage;
		if (localStorage.getItem("LoginActualPage") === "True") {
			actualPageValue = "login";
			localStorage.removeItem("LoginActualPage");
		}
		if (
			actualPageValue !== "/home" &&
			UserData.possumei === "nao" &&
			UserData.etapa !== "anm"
		) {
			setAlignment("0");
			setTab("0");
			switch (UserData.etapa) {
				case "pem":
					setEmpresarialFull(false);
					setAtendimentoFull(false);
					setProfissionalFull(false);
					break;
				case "pat":
					setEmpresarialFull(false);
					setAtendimentoFull(false);
					setProfissionalFull(false);
					break;
				case "ppr":
					setEmpresarialFull(true);
					setAtendimentoFull(true);
					if (UserData.parceiro.length !== 0) {
						setProfissionalFull(true);
					} else {
						setProfissionalFull(false);
					}
					break;
				default:
					setEmpresarialFull(true);
					setAtendimentoFull(true);
					setProfissionalFull(true);
					break;
			}
		} else {
			NavigationAcordingEtapa(UserData);
		}

		if (image !== "") {
			setProfileImage(false);
			document.getElementById("image-profile").src =
				"data:image/png;base64," + image;
		}
		setPossuiMei(UserData.possumei);
	}

	function handleNavigation(UserData) {
		switch (UserData.etapa) {
			case "pem":
				setEmpresarialFull(false);
				setAtendimentoFull(false);
				setProfissionalFull(false);
				setAlignment("0");
				setTab("0");
				break;
			case "pat":
				if (
					UserData.possumei === "nao" &&
					localStorage.getItem("NoMei") !== "True"
				) {
					setEmpresarialFull(false);
					setAtendimentoFull(false);
					setProfissionalFull(false);
					setAlignment("0");
					setTab("0");
				} else {
					setEmpresarialFull(true);
					setAtendimentoFull(false);
					setProfissionalFull(false);
					setAlignment("1");
					setTab("1");
					localStorage.removeItem("NoMei");
				}
				break;
			case "ppr":
				setEmpresarialFull(true);
				setAtendimentoFull(true);
				setAlignment("2");
				setTab("2");
				if (UserData.parceiro.length !== 0) {
					setProfissionalFull(true);
				} else {
					setProfissionalFull(false);
				}
				break;
			default:
				setEmpresarialFull(true);
				setAtendimentoFull(true);
				setProfissionalFull(true);
				setAlignment("0");
				setTab("0");
				break;
		}
	}

	function handleChoice(itemSelected) {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		switch (itemSelected) {
			case "0":
				setAlignment(itemSelected);
				setTab(itemSelected);
				break;
			case "1":
				if (UserData.etapa !== "pre" && UserData.etapa !== "pem") {
					setAlignment(itemSelected);
					setTab(itemSelected);
				}
				break;
			case "2":
				if (
					UserData.etapa !== "pre" &&
					UserData.etapa !== "pem" &&
					UserData.etapa !== "pat"
				) {
					setAlignment(itemSelected);
					setTab(itemSelected);
				}
				break;
			default:
				console.log(itemSelected);
				break;
		}
	}

	function previewFile() {
		setProfileImage(false);
		var preview = document.getElementById("image-profile");
		var file = document.querySelector("input[type=file]").files[0];
		var reader = new FileReader();

		if (file) {
			reader.onloadend = async function () {
				preview.src = reader.result;
				setProfileImageFile(reader.result);

				const UserData = JSON.parse(localStorage.getItem("UserData"));

				await ProfileImageController({
					imgperfil: reader.result.split(",")[1],
					idusuario: UserData.idusuario,
				});
			};
			reader.readAsDataURL(file);
		} else {
			preview.src = "";
		}
	}

	function NavigationAcordingEtapa(UserData) {
		if (localStorage.getItem("ConcludeEtapaView") !== null) {
			if (localStorage.getItem("ConcludeEtapaView") === "ATE") {
				setEmpresarialFull(true);
				setAtendimentoFull(true);
				setProfissionalFull(true);
				setAlignment("1");
				setTab("1");
			} else if (localStorage.getItem("ConcludeEtapaView") === "PRO") {
				setEmpresarialFull(true);
				setAtendimentoFull(true);
				setProfissionalFull(true);
				setAlignment("2");
				setTab("2");
			} else {
				setEmpresarialFull(true);
				setAtendimentoFull(true);
				setProfissionalFull(true);
				setAlignment("0");
				setTab("0");
			}
			localStorage.removeItem("ConcludeEtapaView");
		} else {
			handleNavigation(UserData);
		}
	}
}
