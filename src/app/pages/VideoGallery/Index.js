import React, { useEffect, useState } from "react";

// Images
import FooterMessage from "../../components/FooterMessage/FooterMessage.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";

// import HandCel from "../../assets/images/hand-cel.png";
import HandCel from "../../assets/images/iphone.png";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		flexGrow: 1,
		margin: "auto",
	},
}));

const youtubeVideos = [
	"https://www.youtube.com/embed/qBbDRNlxXcs?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/Wx9A9PfpARU?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/kWlt_QphQ1E?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/Uaf1lGSJDF4?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/38FNjGmwbgU?enablejsapi=1&rel=0",
];

function VideoGallery(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		closeVideo();
		document.getElementById("background").style.backgroundColor = "#2e96c4";
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (UserData !== null) {
			setName(UserData.nmusuario);
		} else {
			props.history.push("/login");
		}
	}, [props]);

	const classes = useStyles();
	const [name, setName] = useState("");
	const [videos, setVideos] = useState("");

	return (
		<>
			<Slide direction="left" in={true} mountOnEnter unmountOnExit>
				<div
					id={"video-gallery-page"}
					className={classes.root + " welcome-container"}
				>
					<Paper
						square
						elevation={0}
						className={classes.header}
					></Paper>
					<div className={"video-galerry"}>
						<h1>Saiba mais sobre a MMS</h1>
						{JSON.parse(localStorage.getItem("UserData")).cnpj ===
						"" ? (
							<div
								className={
									"know-more-container finish-container"
								}
							>
								<NavLink
									className={"know-more-container__button"}
									to={"indicacao"}
								>
									<div className="begin-btn-container">
										<div
											className={
												"finish-container-btn-indication go-back-button finish-container-btn"
											}
										>
											Quero indicar montadores
										</div>
									</div>
								</NavLink>
								<NavLink
									className={"know-more-container__button"}
									to={"progresso"}
								>
									<div className="begin-btn-container">
										<div
											className={
												"finish-container-btn-about go-back-button finish-container-btn"
											}
										>
											Status de Cadastro
										</div>
									</div>
								</NavLink>
							</div>
						) : null}

						<div className={"list-videos"}>
							<div className={"list-video"}>
								<div
									className="play-video-layer"
									onClick={() => showVideo(0)}
								></div>
								<iframe
									className={"video-background-container"}
									title={"thumbnail-1"}
									width="100%"
									height="200"
									src="https://www.youtube.com/embed/qBbDRNlxXcs?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>Vídeo Institucional MMS</h2>
								</div>
							</div>
							<div className={"list-video"}>
								<div
									className="play-video-layer"
									onClick={() => showVideo(1)}
								></div>
								<iframe
									className={"video-background-container"}
									title={"thumbnail-2"}
									width="100%"
									height="200"
									src="https://www.youtube.com/embed/Wx9A9PfpARU?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>Benefícios de ser um Parceiro MMS</h2>
								</div>
							</div>
							<div className={"list-video"}>
								<div
									className="play-video-layer"
									onClick={() => showVideo(2)}
								></div>
								<iframe
									className={"video-background-container"}
									title={"thumbnail-2"}
									width="100%"
									height="200"
									src="https://www.youtube.com/embed/kWlt_QphQ1E?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>Ferramentas de trabalho</h2>
								</div>
							</div>
							<div className={"list-video-hidden list-video"} />
							<div className={"list-video"}>
								<div
									className="play-video-layer"
									onClick={() => showVideo(3)}
								></div>
								<iframe
									className={"video-background-container"}
									title={"thumbnail-2"}
									width="100%"
									height="200"
									src="https://www.youtube.com/embed/Uaf1lGSJDF4?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>
										Conheça a opinião de quem já é montador
										MMS
									</h2>
								</div>
							</div>
							<div className={"list-video"}>
								<div
									className="play-video-layer"
									onClick={() => showVideo(4)}
								></div>
								<iframe
									className={"video-background-container"}
									title={"thumbnail-2"}
									width="100%"
									height="200"
									src="https://www.youtube.com/embed/38FNjGmwbgU?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>Boas Práticas</h2>
								</div>
							</div>
						</div>
					</div>
					<FooterMessage />
				</div>
			</Slide>
			{videos}
		</>
	);

	function createVideos(obj) {
		setVideos(
			<div
				id={"hand-cel-" + youtubeVideos[obj]}
				className="parent-hand-cel"
				key={"hand-cel-" + youtubeVideos[obj]}
			>
				<span onClick={() => closeVideo()}>X</span>
				<div className="video-iphone-container">
					<div className={"iframe-video-galery"}>
						<iframe
							className={
								"iframe-video-galery-iframe youtube-video-iframe"
							}
							id={"hand-cel-video-" + youtubeVideos[obj]}
							title={"video-" + youtubeVideos[obj]}
							width="100%"
							height="100"
							src={youtubeVideos[obj]}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<img alt={""} src={HandCel} />
				</div>
			</div>
		);
	}

	function showVideo(obj) {
		createVideos(obj);

		document.getElementById("background").style.backgroundColor = "#2e2b84";

		document.getElementById("video-gallery-page").style.display = "none";
	}

	function closeVideo() {
		setVideos("");

		document.getElementById("background").style.backgroundColor = "#2e96c4";

		document.getElementById("video-gallery-page").style.display = "block";
	}
}

export default VideoGallery;
