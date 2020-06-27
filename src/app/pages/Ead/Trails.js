import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TrailsController } from "../../controllers/UserController";
import Loader from "../../components/Loader/Loader";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";
import Icon from "../../assets/images/person-profile.png";
import { UserInfoController } from "../../controllers/UserController";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 550,
		flexGrow: 1,
		margin: "auto",
	},
}));

function Trails(props) {
	const [loading, setLoading] = useState(true);
	const [trailsList, setTrailsList] = useState("");

	const [profileImage, setProfileImage] = useState(true);
	const [profileImageFile, setProfileImageFile] = useState(true);
	const [name, setName] = useState("");
	const [ddi, setDdi] = useState("");
	const [ddd, setDdd] = useState("");
	const [telephone, setTelephone] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [checkImage, setCheckImage] = useState(false);

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (UserData.etapa === "anm") {
			props.history.push("/menu");
		} else if (UserData.etapa !== "apr") {
			props.history.push("/home");
		}
		document.getElementById("background").style.backgroundColor = "#2e2b84";
		getUserInfo();
		loadTrails();
	}, []);

	const classes = useStyles();

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
						{trailsList}
					</div>
				</Slide>
			)}
		</>
	);

	async function loadTrails() {
		var listTrails;
		var listTrailsArray;
		const UserData = JSON.parse(localStorage.getItem("UserData"));

		const trailLabel = {
			idusuario: UserData.idusuario,
			idoperacao: 1,
			numpagina: 1,
		};

		const response = await TrailsController(trailLabel);
		if (response.httpcode === "401") {
			window.location.reload();
		}

		if (response.data) {
			if (response.data.length > 0) {
				listTrailsArray = response.data.map((obj, i) => (
					<>
						<NavLink
							to={`../../ead/trilha/${obj.idtrilha}`}
							key={`trail_${obj.idtrilha}`}
							className={
								"trail-navlink-container trail-container partner-container"
							}
						>
							<div
								className={
									"trail-navlink-item trail-detail-parent-container trail-detail-parent"
								}
							>
								<div className={"trail-title-container"}>
									<h1
										className={
											"trail-title-proportion trail-title"
										}
									>
										{obj.nmtrilha}
									</h1>

									{obj.tmconteudos !== null ? (
										<div
											className={
												"trail-time-container trail-progress-time"
											}
										>
											<span>
												{" "}
												{obj.tmconteudos
													.split(":")[0]
													.replace(/^0+/, "") !== ""
													? obj.tmconteudos
															.split(":")[0]
															.replace(
																/^0+/,
																""
															) + "h "
													: ""}
												{obj.tmconteudos
													.split(":")[1]
													.replace(/^0+/, "") !== ""
													? obj.tmconteudos
															.split(":")[1]
															.replace(
																/^0+/,
																""
															) + "m "
													: ""}
												{obj.tmconteudos
													.split(":")[2]
													.replace(/^0+/, "") !== ""
													? obj.tmconteudos
															.split(":")[2]
															.replace(
																/^0+/,
																""
															) + "s "
													: ""}
												<AccessTimeIcon
													className={"clock-icon"}
												/>
											</span>
										</div>
									) : (
										<></>
									)}
								</div>
								<span className={"trail-time-label"}>
									Quantidade de atividades: {obj.qtdconteudos}
								</span>
								<div className={"trail-progress-time"}>
									<span>
										Seu progresso:{" "}
										{(
											(100 / obj.qtdconteudos) *
											obj.qtdconteudosfina
										).toFixed(1) + "%"}
									</span>
								</div>
								<LinearProgress
									variant="determinate"
									value={(
										(100 / obj.qtdconteudos) *
										obj.qtdconteudosfina
									).toFixed(1)}
									className={"linear-progress-defaut"}
								/>
							</div>
						</NavLink>
						{obj.videotrilha !== undefined &&
						obj.videotrilha !== "" ? (
							<div
								className={
									"simulator-learn-video-container video-galerry"
								}
							>
								<div
									className={
										"simulator-learn-video list-videos"
									}
								>
									<div className={"list-video"}>
										<iframe
											className={
												"video-background-container"
											}
											title={"thumbnail-1"}
											width="100%"
											height="200"
											src={obj.videotrilha + "?rel=0"}
											frameBorder="0"
											allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
										<div className="video-title">
											<h2
												className={
													"description-simulator-learn-video"
												}
											>
												Aprenda a utilizar o Simulador
												TOA
											</h2>
										</div>
									</div>
								</div>
							</div>
						) : null}
					</>
				));

				listTrails = () => (
					<>
						<div className={"trails-hub"}>
							<h1>Trilhas</h1>
							{listTrailsArray}
							<div className={"go-back-container"}>
								<div
									onClick={() => window.history.back()}
									className="go-back-ead begin-btn-container"
								>
									<div
										className={
											"margin-bottom-16 remove-margin-right go-back-button"
										}
									>
										Voltar
									</div>
								</div>
								<div />
								<div />
							</div>
						</div>
					</>
				);
			} else {
				listTrails = () => (
					<>
						{" "}
						<div className={"trails-hub"}>
							<h1>Trilhas</h1>
							<div className={"list-trails"}>
								<label className="error-message">
									Não há trilhas até o momento.
								</label>
							</div>
						</div>
					</>
				);
			}
		} else {
			listTrails = () => (
				<>
					{" "}
					<div className={"trails-hub"}>
						<h1>Trilhas</h1>
						<div className={"list-trails"}>
							<label className="error-message">
								Ocorreu um erro, tente mais tarde.
							</label>
						</div>
					</div>
				</>
			);
		}

		setTrailsList(listTrails);
		setLoading(false);
		return;
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
}

export default Trails;
