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

function Summary() {
	const [size, setSize] = useState("");
	const [sizeNumber, setSizeNumber] = useState("");
	const [flavors, setFlavors] = useState("");
	const [borda, setBorda] = useState("");
	const [obs, setObs] = useState("");

	useEffect(() => {
		loadData();
	}, []);

	const classes = useStyles();

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " pizza-container"}>
				<h1 className={"question-header"}>Confirme seu pedido</h1>
				<div className="extra-container">
					<label className={"extra-text"}>Tamanho</label>
					<span>
						{size} ({sizeNumber} pedaços)
					</span>
				</div>
				<div className="extra-container">
					<label className={"extra-text"}>Ingredientes</label>
					<span>{flavors}</span>
				</div>
				<div className="extra-container">
					<label className={"extra-text"}>Borda</label>
					<span>{borda}</span>
				</div>
				<div className="extra-container">
					<label className={"extra-text"}>Observação</label>
					<span>{obs}</span>
				</div>
				<footer className={"footer-default"}>
					<NavLink to={"extra-pizza"} className={"go-forward-button"}>
						Voltar
					</NavLink>
					<NavLink
						to={"pizza-finalizada"}
						className={"go-forward-button"}
					>
						Confirmar
					</NavLink>
				</footer>
			</div>
		</Slide>
	);

	function loadData() {
		const PizzaData = JSON.parse(localStorage.getItem("PizzaData"));
		setSize(PizzaData.size.name);
		setSizeNumber(PizzaData.size.size);

		let flavors = "";
		PizzaData.flavors.forEach((element) => {
			flavors = flavors + element.name + ", ";
		});
		flavors = flavors.substring(0, flavors.length - 2);
		setFlavors(flavors);
		setBorda(PizzaData.extra.borda);
		setObs(PizzaData.extra.obs);
	}
}

export default Summary;
