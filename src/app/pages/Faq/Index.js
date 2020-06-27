import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { FaqController } from "../../controllers/UserController";
import Loader from "../../components/Loader/Loader";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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

const useStylesExpansion = makeStyles((theme) => ({}));

function Faq(props) {
	const [loading, setLoading] = useState(true);
	const [faqList, setFaqList] = useState("");

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		loadFaq();
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

	const classesExpasnsion = useStylesExpansion();

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
							className={classesExpasnsion.header}
						></Paper>
						<div className={"faq-collapse"}>
							<h1 className={"orange-text"}>
								<NavLink to={"central-de-noticias"}>
									<SvgIcon component={ArrowBackIosIcon}>
										<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
									</SvgIcon>
								</NavLink>
								FAQ
							</h1>
							{faqList}
						</div>
					</div>
				</Slide>
			)}
		</>
	);

	async function loadFaq() {
		const response = await FaqController();

		var listFaq;

		if (response.data) {
			if (response.data.length > 0) {
				listFaq = response.data.map((obj, i) => (
					<ExpansionPanel className={"acordeon-container"} key={i}>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel_${i}d-content`}
							id={`panel_${i}d-header`}
						>
							<Typography className={"collapse-title"}>
								{obj.pergunta}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography className={"collapse-content"}>
								{obj.resposta}
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				));
			} else {
				listFaq = () => {
					return (
						<label className="error-message">
							Nã há conteúdo até o momento.
						</label>
					);
				};
			}
		} else {
			listFaq = () => {
				return (
					<label className="error-message">
						Ocorreu um erro, tente mais tarde.
					</label>
				);
			};
		}

		setFaqList(listFaq);
		setLoading(false);
		return;
	}
}

export default Faq;
