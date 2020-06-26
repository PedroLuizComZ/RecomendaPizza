import React, { useEffect, useState } from "react";

// Images
import FaqIcon from "../../assets/images/faq-icon.png";
import NewsIcon from "../../assets/images/news-icon.png";
import FooterMessage from "../../components/FooterMessage/FooterMessage.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		flexGrow: 1,
		margin: "auto",
	},
	header: {
		display: "flex",
		alignItems: "center",
		height: 50,
		paddingLeft: theme.spacing(4),
		backgroundColor: "unset",
	},
	img: {
		height: 255,
		display: "block",
		maxWidth: 400,
		overflow: "hidden",
		width: "100%",
	},
	list: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: "unset",
	},
}));

function NoticesHub(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		document.getElementById("background").style.backgroundColor = "#2e2b84";
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (UserData !== null) {
			setName(UserData.nmusuario);
		} else {
			props.history.push("/login");
		}
	}, [props]);

	const classes = useStyles();
	const [name, setName] = useState("");

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " welcome-container"}>
				<Paper square elevation={0} className={classes.header}></Paper>
				<div className={"notices-hub"}>
					<h1>Central de Notícias</h1>
					<div className={"notices-links"}>
						<div className={"notice-link"}>
							<NavLink to={"faq"}>
								<img src={FaqIcon} alt={""} />
								<h2>
									<b>FAQ</b>
								</h2>
							</NavLink>
						</div>
						<div className={"notice-link"}>
							<NavLink to={"noticias"}>
								<img src={NewsIcon} alt={""} />
								<h2>
									<b>Outras informações</b>
									<br />
									relevantes
								</h2>
							</NavLink>
						</div>
					</div>
				</div>
				<FooterMessage />
			</div>
		</Slide>
	);
}

export default NoticesHub;
