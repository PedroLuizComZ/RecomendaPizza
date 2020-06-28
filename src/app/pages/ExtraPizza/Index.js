import React, { useEffect } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

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

function SizePizza() {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {}, []);

	const classes = useStyles();

	const [borda, setBorda] = React.useState(false);

	const handleChange = (event) => {
		setBorda(event.target.value);
	};

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " pizza-container"}>
				<h1 className={"question-header"}>
					Deseja acrescentar algo extra?
				</h1>
				<div className="extra-container">
					<label className={"extra-text"}>
						Deseja acrescentar Borda ?
					</label>
					<Select id="borda" value={borda} onChange={handleChange}>
						<MenuItem value={true}>Sim</MenuItem>
						<MenuItem value={false}>Não</MenuItem>
					</Select>
				</div>
				<div className="extra-container">
					<label className={"extra-text"}>
						Alguma observação á fazer?
					</label>
					<TextField
						id="observation"
						multiline
						rows={5}
						variant="outlined"
					/>
				</div>
				<footer className={"footer-default"}>
					<NavLink to={"sabor-pizza"} className={"go-forward-button"}>
						Voltar
					</NavLink>
					<NavLink
						onClick={() => handleClick()}
						to={"resumo-pizza"}
						className={"go-forward-button"}
					>
						Avançar
					</NavLink>
				</footer>
			</div>
		</Slide>
	);

	function handleClick() {
		let PizzaData = JSON.parse(localStorage.getItem("PizzaData"));
		PizzaData.extra = {
			borda: borda ? "Sim" : "Não",
			obs: document.getElementById("observation").value,
		};
		localStorage.setItem("PizzaData", JSON.stringify(PizzaData));
	}
}

export default SizePizza;
