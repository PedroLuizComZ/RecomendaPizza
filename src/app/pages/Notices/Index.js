import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { NoticesController } from "../../controllers/UserController";
import Loader from "../../components/Loader/Loader";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		flexGrow: 1,
		margin: "auto",
	},
}));

function Notices(props) {
	const [loading, setLoading] = useState(true);
	const [noticesList, setNoticesList] = useState("");

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
						{noticesList}
					</div>
				</Slide>
			)}
		</>
	);

	async function loadNotices() {
		var listNotices;
		var listNoticesArray;

		const response = await NoticesController();

		if (response.data) {
			if (response.data.length > 0) {
				listNoticesArray = response.data.map((obj, i) => (
					<NavLink
						to={`noticia/${obj.idnoticia}`}
						key={`notice_${obj.idnoticia}`}
						onClick={() => setLoclaStorage(obj.idnoticia)}
					>
						<div className={"list-notice"}>
							<h4>{obj.titulo}</h4>
							<p>{obj.prologo.substr(0, 150) + "\u2026"}</p>
						</div>
					</NavLink>
				));

				listNotices = () => (
					<>
						<div className={"notices-hub"}>
							<h1 className={"orange-text"}>
								{printBackIcon("notices")}Notícias
							</h1>
							<div className={"list-notices"}>
								{listNoticesArray}
							</div>
						</div>
					</>
				);
			} else {
				listNotices = () => (
					<>
						{" "}
						<div className={"notices-hub"}>
							<h1 className={"orange-text"}>
								{printBackIcon("notices")}Notícias
							</h1>
							<div className={"list-notices"}>
								<label className="error-message">
									Não há notícias até o momento.
								</label>
							</div>
						</div>
					</>
				);
			}
		} else {
			listNotices = () => (
				<>
					{" "}
					<div className={"notices-hub"}>
						<h1 className={"orange-text"}>
							{printBackIcon("notices")}Notícias
						</h1>
						<div className={"list-notices"}>
							<label className="error-message">
								Ocorreu um erro, tente mais tarde.
							</label>
						</div>
					</div>
				</>
			);
		}

		setNoticesList(listNotices);
		setLoading(false);
		return;
	}

	function setLoclaStorage(item) {
		localStorage.setItem(item, "idNoticia");
	}

	function printBackIcon(lastPage) {
		var backPage = "central-de-noticias";

		return (
			<NavLink to={backPage}>
				<SvgIcon component={ArrowBackIosIcon}>
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
				</SvgIcon>
			</NavLink>
		);
	}
}

export default Notices;
