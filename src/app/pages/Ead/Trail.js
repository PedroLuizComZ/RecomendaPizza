import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { TrailController } from "../../controllers/UserController";
import Loader from "../../components/loader/Loader";
import { backPage } from "../../../Routes.js";
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

function Trail(props) {
	const [loading, setLoading] = useState(true);
	const [trail, setTrail] = useState("");

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
		loadTrail();

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
						<div className={"spacer"} />
						<div className={"trail-detail"}>{trail}</div>
					</div>
				</Slide>
			)}
		</>
	);

	async function loadTrail() {
		var tid = props.match.params.id;

		var trail;
		var contentsArray;
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (typeof tid !== "undefined") {
			const trailLabel = {
				idusuario: UserData.idusuario,
				idoperacao: 1,
				idtrilha: Number(tid),
			};

			const trailResponse = await TrailController(trailLabel);
			if (
				trailResponse.data.conteudos !== undefined &&
				trailResponse.data.conteudos.length > 0
			) {
				contentsArray = trailResponse.data.conteudos.map((obj, i) => (
					<div key={i} className={"space-itens"}>
						<NavLink
							to={`/ead/trilha/${tid}/conteudo/${obj.idconteudo}`}
							key={`content_${obj.idconteudo}`}
							className={"trail-container partner-container"}
						>
							<div className={"play-icon"}>
								<AddToHomeScreenIcon />
							</div>
							<div className={"activity-description"}>
								<span
									className={
										"activity-description-iten partner-label"
									}
								>
									{obj.nmconteudo}
								</span>
								{obj.tmconteudo !== null ? (
									<span
										className={
											"activity-description-iten activity-description-time partner-label"
										}
									>
										Tempo:{" "}
										{obj.tmconteudo
											.split(":")[0]
											.replace(/^0+/, "") !== ""
											? obj.tmconteudo
													.split(":")[0]
													.replace(/^0+/, "") + "h "
											: ""}
										{obj.tmconteudo
											.split(":")[1]
											.replace(/^0+/, "") !== ""
											? obj.tmconteudo
													.split(":")[1]
													.replace(/^0+/, "") + "m "
											: ""}
										{obj.tmconteudo
											.split(":")[2]
											.replace(/^0+/, "") !== ""
											? obj.tmconteudo
													.split(":")[2]
													.replace(/^0+/, "") + "s "
											: ""}{" "}
									</span>
								) : (
									<span
										className={
											"activity-description-iten activity-description-time partner-label"
										}
									>
										&nbsp;
									</span>
								)}
							</div>
							<div className={"progress-container-activity"}>
								<div className={"play-icon"}>
									<DoneAllIcon
										className={
											obj.flfim === "sim"
												? "activity-done"
												: "low-opacity"
										}
									/>
								</div>
								<span
									className={
										"text-progress-label partner-label"
									}
								>
									{obj.flfim === "sim"
										? "Concluído"
										: "Pendente"}
								</span>
							</div>
						</NavLink>
						{trailResponse.data.conteudos.length !== i + 1 ? (
							<div className={"division-points"}>
								<div className={"division-points-elements"} />
								<div className={"division-points-elements"} />
								<div className={"division-points-elements"} />
							</div>
						) : (
							<></>
						)}
					</div>
				));
			} else {
				contentsArray = (
					<div className={"list-content"}>
						<h1>
							<span>Não existem conteúdos para essa trilha.</span>
						</h1>
					</div>
				);
			}

			if (trailResponse.data) {
				const trailData = trailResponse.data;
				trail = () => (
					<>
						<div
							className={
								"trail-detail-parent-container trail-detail-parent"
							}
						>
							<div className={"trail-title-container"}>
								<h1
									className={
										"trail-title-proportion trail-title"
									}
								>
									{trailData.nmtrilha}
								</h1>
								<div
									className={
										"trail-time-container trail-progress-time"
									}
								>
									<span>
										<span>
											{" "}
											{trailData.tmconteudos
												.split(":")[0]
												.replace(/^0+/, "") !== ""
												? trailData.tmconteudos
														.split(":")[0]
														.replace(/^0+/, "") +
												  "h "
												: ""}
											{trailData.tmconteudos
												.split(":")[1]
												.replace(/^0+/, "") !== ""
												? trailData.tmconteudos
														.split(":")[1]
														.replace(/^0+/, "") +
												  "m "
												: ""}
											{trailData.tmconteudos
												.split(":")[2]
												.replace(/^0+/, "") !== ""
												? trailData.tmconteudos
														.split(":")[2]
														.replace(/^0+/, "") +
												  "s "
												: ""}
											<AccessTimeIcon
												className={"clock-icon"}
											/>
										</span>
									</span>
								</div>
							</div>
							<span className={"trail-time-label"}>
								Quantidade de atividades:{" "}
								{trailData.conteudos.length}
							</span>
							<div className={"trail-progress-time"}>
								<span>
									Seu progresso:{" "}
									{(
										(100 / trailData.qtdcounteudos) *
										trailData.qtdconteudosfina
									).toFixed(1) + "%"}
								</span>
							</div>
							<LinearProgress
								variant="determinate"
								value={(
									(100 / trailData.qtdcounteudos) *
									trailData.qtdconteudosfina
								).toFixed(1)}
								className={"linear-progress-defaut"}
							/>
						</div>
						<h1>Clique na ação para simular</h1>
						{contentsArray}
						{printBackIcon()}
					</>
				);
			} else {
				trail = () => (
					<>
						<div className={"trail-detail-parent"}>
							<h1>
								{printBackIcon()}
								<span>Trilha não encontrada</span>
							</h1>
							<label className="error-message">
								Trilha não existente.
							</label>
						</div>
					</>
				);
			}
		} else {
			trail = () => (
				<>
					<div className={"trail-detail-parent"}>
						<h1>
							{printBackIcon()}
							<span>Trilha não encontrada</span>
						</h1>
						<label className="error-message">
							Ocorreu um erro, tente mais tarde.
						</label>
					</div>
				</>
			);
		}

		setTrail(trail);
		setLoading(false);
		return;
	}

	function printBackIcon(lastPage) {
		var backPage = "/ead/trilhas";

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

export default Trail;
