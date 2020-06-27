import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import HandCel from "../../assets/images/iphone.png";
import Loader from "../../components/Loader/Loader";
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

function Simulator(props) {
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState("");

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
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

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Slide direction="left" in={true} mountOnEnter unmountOnExit>
					<div className={classes.root + " simulator-page"}>
						<Paper
							square
							elevation={0}
							className={classes.header}
						></Paper>
						<div className={"simulator-detail"}>{content}</div>
					</div>
				</Slide>
			)}
		</>
	);

	async function loadContent() {
		var sid = props.match.params.id;
		var cid = props.match.params.cid;
		var tid = props.match.params.tid;
		var pontoinicio = props.match.params.pontoinicio;
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		var paramsSimulator = {
			uid: UserData.idusuario,
			oid: localStorage.getItem("IdOperacao"),
			tid: tid,
			cid: cid,
			pontoinicio: pontoinicio,
			urlvideo: localStorage.getItem("UrlVideo"),
		};
		console.log(paramsSimulator);
		paramsSimulator = btoa(JSON.stringify(paramsSimulator));
		var urlIframe =
			process.env.REACT_APP_API_URL_SIMULADOR + "/?p=" + paramsSimulator;

		var content = () => (
			<>
				<div className={"content-detail-parent"}>
					<h1>
						<span>Simulador</span>
					</h1>
					{printBackIcon(tid, cid)}
				</div>
				<Loader />
				<div
					id={"modal-video-simulator"}
					className="celphone-simulator-container parent-hand-cel-size parent-hand-cel"
					style={{ display: "none" }}
				>
					<div className="video-iphone-parent">
						<iframe
							onLoad={() => handleLoadSimulator()}
							title={"video"}
							src={urlIframe}
							width="100%"
							height="100"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className={"celphone-simulator-iframe iframe-video"}
						></iframe>
						<div className={"simulator-loader"}>
							<Loader />
						</div>
						<img
							className={"celphone-simulator"}
							alt={""}
							src={HandCel}
						/>
					</div>
				</div>
			</>
		);

		setContent(content);
		setLoading(false);
		return;
	}

	function printBackIcon(tid, cid) {
		var backPage = `/ead/trilha/${tid}/conteudo/${cid}`;

		return (
			<NavLink
				to={backPage}
				className="exit-btn-simulator go-back-ead begin-btn-container"
			>
				<span>X</span>
			</NavLink>
		);
	}

	function handleLoadSimulator() {
		document.getElementById("loader_position").style.display = "none";
		document.getElementById("modal-video-simulator").style.display =
			"block";
	}
}

export default Simulator;
