import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { NoticeController } from "../../controllers/UserController";
import Loader from "../../components/loader/Loader";
import { backPage } from "../../../Routes.js";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		flexGrow: 1,
		margin: "auto",
	},
}));

function Notice(props) {
	const [loading, setLoading] = useState(true);
	const [notice, setNotice] = useState("");

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		loadNotices();
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
					<div className={classes.root}>
						<Paper
							square
							elevation={0}
							className={classes.header}
						></Paper>
						<div className={"notice-detail"}>{notice}</div>
					</div>
				</Slide>
			)}
		</>
	);

	async function loadNotices() {
		const localPathSplitted = window.location.href.substring(
			window.location.href.lastIndexOf("/") + 1
		);

		var notice;

		if (typeof localPathSplitted !== "undefined") {
			const noticeLabel = {
				idnoticia: Number(localPathSplitted),
			};

			const noticeResponse = await NoticeController(noticeLabel);

			if (noticeResponse.data) {
				const noticeData = noticeResponse.data;

				notice = () => (
					<>
						<div className={"notice-detail-parent"}>
							<h1>
								{printBackIcon()}
								<span className={"orange-text"}>
									{noticeData.titulo}
								</span>
							</h1>
							<div className={"notice-detail"}>
								<p
									dangerouslySetInnerHTML={{
										__html: noticeData.corpo,
									}}
								></p>
							</div>
						</div>
					</>
				);
			} else {
				notice = () => (
					<>
						<div className={"notice-detail-parent"}>
							<h1>
								{printBackIcon()}
								<span className={"orange-text"}>
									Notícia não encontrada
								</span>
							</h1>
							<label className="error-message">
								Notícia não existente.
							</label>
						</div>
					</>
				);
			}
		} else {
			notice = () => (
				<>
					<div className={"notice-detail-parent"}>
						<h1>
							{printBackIcon()}
							<span className={"orange-text"}>
								Notícia não encontrada
							</span>
						</h1>
						<label className="error-message">
							Ocorreu um erro, tente mais tarde.
						</label>
					</div>
				</>
			);
		}

		setNotice(notice);
		setLoading(false);
		return;
	}

	function printBackIcon(lastPage) {
		var backPage = "/noticias";

		return (
			<NavLink to={backPage}>
				<SvgIcon component={ArrowBackIosIcon}>
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
				</SvgIcon>
			</NavLink>
		);
	}
}

export default Notice;
