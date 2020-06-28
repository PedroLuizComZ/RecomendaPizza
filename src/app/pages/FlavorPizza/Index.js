import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";

import { FlavorsPizzaController } from "../../controllers/PizzaController";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "auto",
	},
	cardHeader: {
		padding: theme.spacing(1, 2),
	},
	list: {
		width: 200,
		height: 230,
		backgroundColor: theme.palette.background.paper,
		overflow: "auto",
	},
}));

function not(a, b) {
	return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
	return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
	return [...a, ...not(b, a)];
}

function FlavorPizza() {
	useEffect(() => {
		loadData();
	}, []);

	const classes = useStyles();
	const [checked, setChecked] = useState([]);
	const [left, setLeft] = useState([]);
	const [right, setRight] = useState([]);

	const leftChecked = intersection(checked, left);
	const rightChecked = intersection(checked, right);

	const [loading, setLoading] = useState(true);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const numberOfChecked = (items) => intersection(checked, items).length;

	const handleToggleAll = (items) => () => {
		if (numberOfChecked(items) === items.length) {
			setChecked(not(checked, items));
		} else {
			setChecked(union(checked, items));
		}
	};

	const handleCheckedRight = () => {
		setRight(right.concat(leftChecked));
		setLeft(not(left, leftChecked));
		setChecked(not(checked, leftChecked));
	};

	const handleCheckedLeft = () => {
		setLeft(left.concat(rightChecked));
		setRight(not(right, rightChecked));
		setChecked(not(checked, rightChecked));
	};

	const customList = (title, items) => (
		<Card>
			<CardHeader
				className={classes.cardHeader}
				avatar={
					<Checkbox
						onClick={handleToggleAll(items)}
						checked={
							numberOfChecked(items) === items.length &&
							items.length !== 0
						}
						indeterminate={
							numberOfChecked(items) !== items.length &&
							numberOfChecked(items) !== 0
						}
						disabled={items.length === 0}
						inputProps={{
							"aria-label": "Todos os itens escolhidos",
						}}
					/>
				}
				title={title}
				subheader={`${numberOfChecked(items)}/${
					items.length
				} Escolhidos`}
			/>
			<Divider />
			<List className={classes.list} dense component="div" role="list">
				{items.map((value) => {
					const labelId = `transfer-list-all-item-${value}-label`;

					return (
						<ListItem
							key={value}
							role="listitem"
							button
							onClick={handleToggle(value)}
						>
							<ListItemIcon>
								<Checkbox
									checked={checked.indexOf(value) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ "aria-labelledby": labelId }}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={`${value}`} />
						</ListItem>
					);
				})}
				<ListItem />
			</List>
		</Card>
	);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " pizza-container"}>
				<h1 className={"question-header"}>
					Escolha os seus ingredientes
				</h1>
				<Paper square elevation={0} className={classes.header}></Paper>
				<Paper square elevation={0} className={classes.header}></Paper>
				{loading ? null : (
					<Grid
						container
						spacing={2}
						justify="center"
						alignItems="center"
						className={classes.root}
					>
						<Grid item>
							{customList("Disponíveis", left)}
							<div className={"button-container"}>
								<Button
									variant="outlined"
									size="small"
									className={"button-default"}
									onClick={handleCheckedRight}
									aria-label="move selected right"
								>
									Adicionar á lista
								</Button>
							</div>
						</Grid>

						<Grid item>
							{customList("Selecionados", right)}
							<div className={"button-container"}>
								<Button
									variant="outlined"
									size="small"
									className={"button-default"}
									onClick={handleCheckedLeft}
									aria-label="move selected left"
								>
									Remover á lista
								</Button>
							</div>
						</Grid>
					</Grid>
				)}

				<footer className={"footer-default"}>
					<NavLink
						to={"tamanho-pizza"}
						className={"go-forward-button"}
					>
						Voltar
					</NavLink>
					<NavLink
						onClick={() => handleClick()}
						to={"extra-pizza"}
						className={"go-forward-button"}
					>
						Avançar
					</NavLink>
				</footer>
			</div>
		</Slide>
	);

	async function loadData() {
		const response = await FlavorsPizzaController();
		let available = left;
		let selected = right;

		response.available.forEach((element) => {
			available.push(element.name);
		});

		response.selected.forEach((element) => {
			selected.push(element.name);
		});

		setLeft(available);
		setRight(selected);
		setLoading(false);
	}

	function handleClick() {
		let flavors = [];
		right.forEach((element) => {
			flavors.push({ name: element });
		});
		let PizzaData = JSON.parse(localStorage.getItem("PizzaData"));
		console.log(PizzaData);
		console.log(PizzaData.flavors);
		PizzaData.flavors = flavors;
		localStorage.setItem("PizzaData", JSON.stringify(PizzaData));
	}
}

export default FlavorPizza;
