import React, { useEffect, useState } from "react";

// Images
import FooterMessage from "../../components/FooterMessage/FooterMessage.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
	"https://www.youtube.com/embed/k5hR9OMzbmc?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/fW4UY8eC3qE?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/zFs3LqOlP8g?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/ra1HYJfLRWA?enablejsapi=1&rel=0",
	"https://www.youtube.com/embed/eOUMN-9wXA8?enablejsapi=1&rel=0",
];

function VideoToa(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		closeVideo();
		document.getElementById("background").style.backgroundColor = "#2e96c4";
		const UserData = JSON.parse(localStorage.getItem("UserData"));

		if (UserData.etapa === "anm") {
			props.history.push("/menu");
		} else if (UserData.etapa !== "apr") {
			props.history.push("/home");
		}

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
						<h1>Vídeos sobre o TOA</h1>
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
									src="https://www.youtube.com/embed/k5hR9OMzbmc?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>1. Como baixar o TOA</h2>
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
									src="https://www.youtube.com/embed/fW4UY8eC3qE?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>2. Visão Geral do Aplicativo</h2>
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
									src="https://www.youtube.com/embed/zFs3LqOlP8g?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>3. Desmontagem</h2>
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
									src="https://www.youtube.com/embed/ra1HYJfLRWA?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>4. Remanejamento</h2>
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
									src="https://www.youtube.com/embed/eOUMN-9wXA8?rel=0"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<div className="video-title">
									<h2>5. Instância</h2>
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

export default VideoToa;
