import React, { useEffect, useState } from "react";

import { Container } from "./Styles";

import Loader from "../../components/Loader/Loader";
import Avatar from "@material-ui/core/Avatar";
import Icon from "../../assets/images/person-profile.png";
import { NavLink } from "react-router-dom";

import DescriptionIcon from "@material-ui/icons/Description";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import BuildIcon from "@material-ui/icons/Build";
import SettingsIcon from "@material-ui/icons/Settings";

import {
	UserInfoController,
	ProfileImageController,
} from "../../controllers/UserController";
import Slide from "@material-ui/core/Slide";

export default function CompleteMenu(props) {
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
	const [name, setName] = useState("");
	const [ddi, setDdi] = useState("");
	const [ddd, setDdd] = useState("");
	const [telephone, setTelephone] = useState("");
	const [cnpj, setCnpj] = useState("");

	const [profileImage, setProfileImage] = useState(true);
	const [profileImageFile, setProfileImageFile] = useState("");
	const [possuiMei, setPossuiMei] = useState("");

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Slide direction="left" in={true} mountOnEnter unmountOnExit>
					<Container>
						{JSON.parse(localStorage.getItem("UserData")).etapa ===
						"apr" ? (
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
												onClick={() =>
													setProfileImage(true)
												}
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
												? "+" +
												  ddi +
												  " (" +
												  ddd +
												  ") " +
												  telephone
												: ""}
										</span>
									</div>
								</div>
								<div className={"complete-menu-container"}>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../galeria-de-video"
											}
										>
											<div
												className={
													"carrousel-association-container"
												}
											>
												<VideoLibraryIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Saiba Mais sobre a MMS
												</p>
											</div>
										</NavLink>
									</div>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../ead/trilhas"
											}
										>
											<div
												className={
													"yellow-card carrousel-association-container"
												}
											>
												<BuildIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Simulador TOA
												</p>
											</div>
										</NavLink>
									</div>
								</div>
								<div className={"complete-menu-container"}>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../videos-sobre-o-toa"
											}
										>
											<div
												className={
													"blue-card carrousel-association-container"
												}
											>
												<VideoLibraryIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Vídeos sobre o TOA
												</p>
											</div>
										</NavLink>
									</div>
									<div
										className={"carrousel-container"}
										onClick={() =>
											window.open(
												"https://mms.etadirect.com/",
												"_blank"
											)
										}
									>
										<div
											className={
												"orange-card carrousel-association-container"
											}
										>
											<FilterDramaIcon />
										</div>
										<div
											className={
												"complete-menu-text-container"
											}
										>
											<p className={"carrousel-text"}>
												TOA
											</p>
										</div>
									</div>
								</div>
								<div className={"complete-menu-container"}>
									<div
										className={"carrousel-container"}
										onClick={() =>
											window.open(
												"https://prestador.juvo.com.br/#/",
												"_blank"
											)
										}
									>
										<div
											className={
												"light-blue-card carrousel-association-container"
											}
										>
											<SettingsIcon />
										</div>
										<div
											className={
												"complete-menu-text-container"
											}
										>
											<p className={"carrousel-text"}>
												Controle Financeiro
											</p>
										</div>
									</div>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../contrato-de-intermediacao"
											}
										>
											<div
												className={
													"carrousel-association-container"
												}
											>
												<DescriptionIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Contrato de intermediação
												</p>
											</div>
										</NavLink>
									</div>
								</div>
								<div className={"complete-menu-container"}>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../central-de-noticias"
											}
										>
											<div
												className={
													"yellow-card carrousel-association-container"
												}
											>
												<ImportContactsIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Central de Notícias
												</p>
											</div>
										</NavLink>
									</div>
									<div
										className={
											"hidden-div carrousel-container"
										}
									></div>
								</div>
							</div>
						) : (
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
												onClick={() =>
													setProfileImage(true)
												}
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
												? "+" +
												  ddi +
												  " (" +
												  ddd +
												  ") " +
												  telephone
												: ""}
										</span>
									</div>
								</div>
								<div className={"complete-menu-container"}>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../galeria-de-video"
											}
										>
											<div
												className={
													"carrousel-association-container"
												}
											>
												<VideoLibraryIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Saiba Mais sobre a MMS
												</p>
											</div>
										</NavLink>
									</div>
									<div className={"carrousel-container"}>
										<NavLink
											to={
												"../../../../../../../../../central-de-noticias"
											}
										>
											<div
												className={
													"yellow-card carrousel-association-container"
												}
											>
												<ImportContactsIcon />
											</div>
											<div
												className={
													"complete-menu-text-container"
												}
											>
												<p className={"carrousel-text"}>
													Central de Notícias
												</p>
											</div>
										</NavLink>
									</div>
								</div>
							</div>
						)}
					</Container>
				</Slide>
			)}
		</>
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
				break;
			default:
				console.log(response);
				break;
		}
	}

	function handleUserData(UserData, image) {
		setName(UserData.nmusuario);
		setDdi(UserData.ddi);
		setDdd(UserData.ddd);
		setTelephone(UserData.celular);
		if (UserData.cnpj !== "") setCnpj(UserData.cnpj);

		if (image !== "") {
			setProfileImage(false);
			document.getElementById("image-profile").src =
				"data:image/png;base64," + image;
		}
		setPossuiMei(UserData.possumei);
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
}
