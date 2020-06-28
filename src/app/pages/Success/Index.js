import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 720,
		flexGrow: 1,
		margin: "auto",
		border: "solid 1px #DDDDDD",
		boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.75)",
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

function Success() {
	useEffect(() => {
		const PointsPizza = JSON.parse(localStorage.getItem("PointsPizza"));
		if (PointsPizza !== null) {
			setPoints(PointsPizza.points);
			setExistPoints(true);
		}
	}, []);

	const classes = useStyles();

	const [points, setPoints] = useState("");
	const [existPoints, setExistPoints] = useState(false);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " pizza-container"}>
				<h1 className={"question-header"}>Sucesso!</h1>
				<div className={"title-container"}>
					<h2 className={"answer-text"}>Sua pedido foi feito.</h2>
					<h2 className={"answer-text"}>Obrigado pela escolha.</h2>
					{existPoints ? (
						<h2 className={"answer-text"}>
							Você recebeu {points} pontos para seu proximo
							pedido.
						</h2>
					) : null}
				</div>
				<footer className={"footer-default"}>
					<div></div>
					<NavLink to={"/"} className={"go-forward-button"}>
						Novo pedido
					</NavLink>
				</footer>
			</div>
		</Slide>
	);
}

export default Success;
