import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Loader from "../../components/Loader/Loader";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import Avatar from "@material-ui/core/Avatar";
import Icon from "../../assets/images/person-profile.png";
import { ContentController } from "../../controllers/UserController";
import { UserInfoController } from "../../controllers/UserController";
import { backPage } from "../../../Routes.js";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 550,
		flexGrow: 1,
		margin: "auto",
	},
}));

function Content(props) {
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState("");

	const [profileImage, setProfileImage] = useState(true);
	const [profileImageFile, setProfileImageFile] = useState(true);
	const [ddi, setDdi] = useState("");
	const [ddd, setDdd] = useState("");
	const [telephone, setTelephone] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [checkImage, setCheckImage] = useState(false);

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		getUserInfo();
		loadContent();

		document.getElementById("background").style.backgroundColor = "#2e2b84";
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (UserData !== null) {
			setName(UserData.nmusuario);
		} else {
			props.history.push("/login");
		}
	}, []);

	const classes = useStyles();
	const [name, setName] = useState("");

	function ShowWindowDimensions(props) {
		const [width, height] = [window.innerWidth, window.innerHeight];
		var heightStyle, windowHeight;

		if (width > 991) {
			windowHeight = height - 112 + "px";
		} else {
			windowHeight = height - 56 + "px";
		}

		heightStyle = {
			height: windowHeight,
			display: "none",
		};

		return heightStyle;
	}

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Slide direction="left" in={true} mountOnEnter unmountOnExit>
					<div className={classes.root + " z-index-bigger"}>
						{checkImage ? (
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
											src={
												checkImage
													? profileImageFile
													: Icon
											}
											alt={""}
											className={"icon-profile"}
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
						) : (
							<></>
						)}
						<Paper
							square
							elevation={0}
							className={classes.header}
						></Paper>
						<div className={"content-detail"}>{content}</div>
					</div>
				</Slide>
			)}
			{}
		</>
	);

	async function loadContent() {
		const localPathSplitted = window.location.href.substring(
			window.location.href.lastIndexOf("/") + 1
		);
		var cid = props.match.params.id;
		var tid = props.match.params.tid;

		var content;
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (typeof localPathSplitted !== "undefined") {
			const contentLabel = {
				idusuario: UserData.idusuario,
				idoperacao: 1,
				idtrilha: Number(tid),
				idconteudo: Number(cid),
			};

			const contentResponse = await ContentController(contentLabel);

			if (contentResponse.data) {
				const contentData = contentResponse.data;
				localStorage.setItem(
					"UrlVideo",
					contentData.simulador.urlvideo + "?rel=0"
				);
				var videHtml = (
					<div
						id={"modal-video-simulator"}
						className="parent-hand-cel parent-no-cel"
						style={ShowWindowDimensions()}
					>
						<div className="video-iphone-parent">
							<iframe
								title={"video"}
								src={contentData.simulador.urlvideo + "?rel=0"}
								width="100%"
								height="100"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className={"iframe-video iframe-video-position"}
							></iframe>
							<div
								onClick={() => closeVideo()}
								className="ead-btn-back-video go-back-ead begin-btn-container"
							>
								<div
									className={
										"margin-bottom-16 remove-margin-right go-back-button"
									}
								>
									Voltar
								</div>
							</div>
						</div>
					</div>
				);
				content = () => (
					<>
						<div id={"content-page"}>
							<div className={"content-detail-parent"}>
								<h1>
									<span>
										{contentData.simulador.nmsimulador}
									</span>
								</h1>
							</div>

							<div className={"content-description"}>
								<span id={"description-text"}></span>
							</div>
							<div className={"content-btn-container"}>
								<div>{printVideoButton()}</div>
								<div>
									{contentData.flfim === "sim" &&
									contentData.flmultresposta === "nao"
										? null
										: printSimulator(
												contentData.simulador
													.idsimulador,
												cid,
												tid,
												contentData.simulador
													.pontoinicio
										  )}
								</div>
							</div>
							{printBackIcon(tid)}
						</div>
						<div id={"video-content"}>{videHtml}</div>
					</>
				);
			} else {
				content = () => (
					<>
						<div className={"content-detail-parent"}>
							<h1>
								{printBackIcon(tid)}
								<span>Conteúdo não encontrado</span>
							</h1>
							<label className="error-message">
								Conteúdo não existente.
							</label>
						</div>
					</>
				);
			}
			setDescriptionText(contentResponse.data.simulador.descacao);
		} else {
			content = () => (
				<>
					<div className={"content-detail-parent"}>
						<h1>
							{printBackIcon(tid)}
							<span>Conteúdo não encontrada</span>
						</h1>
						<label className="error-message">
							Ocorreu um erro, tente mais tarde.
						</label>
					</div>
				</>
			);
		}
		setContent(content);
		setLoading(false);
		return;
	}

	function printBackIcon(trail_id) {
		var backPage = "/ead/trilha/" + trail_id;

		return (
			<div className={"go-back-container"}>
				<NavLink
					to={backPage}
					className="go-back-ead begin-btn-container"
				>
					<div
						className={
							"margin-bottom-16 remove-margin-right go-back-button"
						}
					>
						Voltar
					</div>
				</NavLink>
				<div />
				<div />
			</div>
		);
	}

	function printVideoButton(urlvideo) {
		return (
			<button
				className={
					"content-btn-item video-btn trail-container partner-container"
				}
				onClick={() => showVideo(urlvideo)}
			>
				<div className={"remove-margin-left play-icon"}>
					<PlayCircleOutlineIcon />
				</div>
				<span className={"align-center-text partner-label"}>
					{" "}
					Ver Vídeo
				</span>
			</button>
		);
	}

	function printSimulator(sid, cid, tid, pontoinicio) {
		return (
			<NavLink
				to={`/ead/simulador/${sid}/trilha/${tid}/conteudo/${cid}/pontoinicio/${pontoinicio}`}
				key={`simulator_${sid}`}
				className={"content-btn-item trail-container partner-container"}
			>
				<div className={"play-icon"}>
					<AddToHomeScreenIcon />
				</div>
				<span className={"align-center-text partner-label"}>
					Simular
				</span>
			</NavLink>
		);
	}

	function showVideo() {
		document.getElementById("background").style.backgroundColor = "#2e2b84";
		document.getElementById("modal-video-simulator").style.display = "flex";
		document.getElementById("content-page").style.display = "none";
	}

	function closeVideo() {
		document.getElementById("background").style.backgroundColor = "#2e2b84";
		document.getElementById("modal-video-simulator").style.display = "none";
		document.getElementById("content-page").style.display = "block";
	}

	async function getUserInfo() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		const response = await UserInfoController({
			idusuario: UserData.idusuario,
		});
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
				setCheckImage(true);
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
		if (image !== "") {
			setProfileImage(false);
			setProfileImageFile("data:image/png;base64," + image);
		}
		if (UserData.cnpj !== "") setCnpj(UserData.cnpj);
	}

	function setDescriptionText(text) {
		try {
			setTimeout(() => {
				document.getElementById("description-text").innerHTML = text;
			}, 300);
		} catch (error) {}
	}
}

export default Content;
