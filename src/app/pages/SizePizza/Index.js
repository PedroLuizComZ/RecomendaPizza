import React, { useEffect, useState } from "react";

import SmallPizza from "../../assets/images/welcome-steps/small-pizza.svg";
import NormalPizza from "../../assets/images/welcome-steps/normal-pizza.svg";
import BigPizza from "../../assets/images/welcome-steps/big-pizza.svg";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import SwipeableViews from "react-swipeable-views";
import Slide from "@material-ui/core/Slide";

import { NavLink } from "react-router-dom";

import { SizePizzaController } from "../../controllers/PizzaController";
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

function ExtraPizza() {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		loadData();
	}, []);

	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = 3;
	const [types, setTypes] = useState([]);
	const [loading, setLoading] = useState(true);
	const images = [SmallPizza, NormalPizza, BigPizza];

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " pizza-container"}>
				<h1 className={"question-header"}>Qual o tamanho da pizza?</h1>
				<Paper square elevation={0} className={classes.header}></Paper>
				{loading ? null : (
					<>
						<SwipeableViews
							axis={theme.direction === "rtl" ? "x-reverse" : "x"}
							index={activeStep}
							enableMouseEvents
							className={"main-content high-level"}
							onChangeIndex={handleStepChange}
						>
							{types.map(function (type, cont) {
								return (
									<div
										key={cont + 1}
										className="content-container-home-parent"
									>
										<div
											className={"content-container-home"}
										>
											<div className={"title-container"}>
												<h2 className={"answer-text"}>
													{type.name}
												</h2>
											</div>
											<div
												className={
													"diamant-container-welcome"
												}
											>
												<img
													className={
														"icon-welcome-size"
													}
													src={images[cont]}
													alt={""}
												/>
											</div>
											<div className={"title-container"}>
												<h2 className={"answer-text"}>
													{type.size} Pedaços
												</h2>
											</div>
										</div>
									</div>
								);
							})}
						</SwipeableViews>
						<MobileStepper
							steps={maxSteps}
							position="static"
							variant="dots"
							activeStep={activeStep}
							className={"main-content"}
							onClick={(e) => changeTabByDot(e.target)}
						/>
					</>
				)}

				<footer className={"footer-default"}>
					<div></div>
					<NavLink
						onClick={() => handleClick()}
						to={"sabor-pizza"}
						className={"go-forward-button"}
					>
						Avançar
					</NavLink>
				</footer>
			</div>
		</Slide>
	);

	async function loadData() {
		const response = await SizePizzaController();
		let typesArray = types;
		response.forEach((element) => {
			typesArray.push(element);
		});
		setTypes(typesArray);
		setLoading(false);
	}

	function handleClick() {
		switch (activeStep) {
			case 0:
				localStorage.setItem(
					"PizzaData",
					JSON.stringify({ size: { name: "Brotinho", size: 4 } })
				);
				break;
			case 1:
				localStorage.setItem(
					"PizzaData",
					JSON.stringify({ size: { name: "Grande", size: 6 } })
				);
				break;
			default:
				localStorage.setItem(
					"PizzaData",
					JSON.stringify({ size: { name: "Família", size: 8 } })
				);
				break;
		}
	}

	function changeTabByDot(element) {
		if (element.classList[0] === "MuiMobileStepper-dot") {
			document
				.getElementsByClassName("MuiMobileStepper-dotActive")[0]
				.classList.remove("MuiMobileStepper-dotActive");
			element.classList.add("MuiMobileStepper-dotActive");
			let dotsSize = document.getElementsByClassName(
				"MuiMobileStepper-dotActive"
			)[0].parentElement.childNodes;
			for (let index = 0; index < dotsSize.length; index++) {
				if (dotsSize[index].classList.length === 2) {
					setActiveStep(index);
				}
			}
		}
	}
}

export default ExtraPizza;
