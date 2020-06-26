import React, { useLayoutEffect, useEffect, useState } from "react";

// Images
import FirstStep from "../../assets/images/welcome-steps/first-step.png";
import SecondStep from "../../assets/images/welcome-steps/second-step.png";
import ThirdStep from "../../assets/images/welcome-steps/third-step.png";
import FourthStep from "../../assets/images/welcome-steps/fourth-step.png";
import Squares from "../../assets/images/left-squares.png";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import SwipeableViews from "react-swipeable-views";

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

function Welcome(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		document.getElementById("skip-introduction").style.width =
			window.innerWidth;
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (UserData !== null) {
			setName(UserData.nmusuario);
		} else {
			props.history.push("/login");
		}
	}, []);

	const InitialTab = localStorage.getItem("InitialTab") === "3" ? 3 : 0;
	localStorage.setItem("InitialTab", "0");

	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(InitialTab);
	const [name, setName] = useState("");
	const maxSteps = 4;

	const handleStepChange = (step) => {
		setActiveStep(step);

		const backgroundLayer = document.getElementById("background");

		switch (step) {
			case 0:
				backgroundLayer.style.backgroundColor = "#2e2b84";
				break;
			case 1:
				backgroundLayer.style.backgroundColor = "#2e96c4";
				break;
			case 2:
				backgroundLayer.style.backgroundColor = "#b26bac";
				break;
			case 3:
				backgroundLayer.style.backgroundColor = "#dbd638";
				break;
			case 4:
				backgroundLayer.style.backgroundColor = "#2e2b84";
				props.history.push("/home");
				break;
			default:
				backgroundLayer.style.backgroundColor = "#2e2b84";
				break;
		}
	};

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);
		return size;
	}

	function ShowWindowDimensions(props) {
		const [width, height] = useWindowSize();

		var windowHeight = "";

		if (width > 991) {
			const currentMinWidthArray = document.getElementsByClassName(
				"react-swipeable-view-container"
			);
			const currentMinWidth = currentMinWidthArray[0].width;
			windowHeight = currentMinWidth;
		} else {
			windowHeight = height - 120 + "px";
		}

		if (props === "margin") {
			var margin = "";

			if (width > 1500) {
				margin = height / 11 + "px 0";
			} else if (width > 991 && width <= 1500) {
				margin = height / 16 + "px 0";
			} else if (height > 700) {
				margin = height / 10 + "px 0";
			} else if (width <= 330) {
				margin = height / 26 + "px 0";
			} else if (width <= 360) {
				margin = height / 18 + "px 0";
			} else if (width > 360 && width < 380) {
				margin = height / 13 + "px 0";
			} else {
				margin = height / 11 + "px 0";
			}

			const marginStyle = {
				margin: margin,
			};

			return marginStyle;
		}

		const heightStyle = {
			height: windowHeight,
		};

		const backgroundLayer = document.getElementById("skip-introduction");

		if (backgroundLayer !== null) {
			if (width > 991) {
				const currentMinWidthArray = document.getElementsByClassName(
					"react-swipeable-view-container"
				);
				const currentMinWidth = currentMinWidthArray[0].width;
				backgroundLayer.style.width = currentMinWidth + "px";
			} else {
				backgroundLayer.style.width = width + "px";
			}
		}

		return heightStyle;
	}

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root + " welcome-container"}>
				<Paper square elevation={0} className={classes.header}></Paper>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
					className={"main-content high-level"}
					style={ShowWindowDimensions()}
				>
					<div key={"1"} className="content-container-home-parent">
						<div className={"content-container-home"}>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>
									Olá,{"\u00A0"}
									<b className={"orange-span"}>{name}</b>!
									<br />
									Seja bem-vindo a{" "}
									<b className={"orange-span"}>MMS</b>!
								</h1>
							</div>
							<div
								className={"diamant-container-welcome"}
								style={ShowWindowDimensions("margin")}
							>
								<img
									className={"icon-welcome-size"}
									src={FirstStep}
									alt={""}
								/>
							</div>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>Com a MMS você pode mais!</h1>
							</div>
						</div>
					</div>
					<div key={"2"} className="content-container-home-parent">
						<div className={"content-container-home"}>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>Escolha sua área de atuação.</h1>
							</div>
							<div
								className={"diamant-container-welcome"}
								style={ShowWindowDimensions("margin")}
							>
								<img
									className={"icon-welcome-size"}
									src={SecondStep}
									alt={""}
								/>
							</div>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>
									Fazendo montagens mais perto de casa, com
									menor deslocamento e mais tempo para você e
									sua família
								</h1>
							</div>
						</div>
					</div>
					<div key={"3"} className="content-container-home-parent">
						<div className={"content-container-home"}>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>Configure sua agenda</h1>
							</div>
							<div
								className={"diamant-container-welcome"}
								style={ShowWindowDimensions("margin")}
							>
								<img
									className={"icon-welcome-size"}
									src={ThirdStep}
									alt={""}
								/>
							</div>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>
									Total autonomia para definir seus dias e
									períodos de trabalho.
								</h1>
							</div>
						</div>
					</div>
					<div key={"4"} className="content-container-home-parent">
						<div className={"content-container-home"}>
							<div
								className={"title-container"}
								style={ShowWindowDimensions("margin")}
							>
								<h1>Finalize seu cadastro agora mesmo.</h1>
							</div>
							<div
								className={"diamant-container-welcome"}
								style={ShowWindowDimensions("margin")}
							>
								<img
									className={"icon-welcome-size"}
									src={FourthStep}
									alt={""}
								/>
							</div>
							<div
								className="begin-btn-container"
								style={ShowWindowDimensions("margin")}
							>
								<NavLink className={"begin-btn"} to={"/home"}>
									COMEÇAR
								</NavLink>
							</div>
						</div>
					</div>
					<div key={"5"} />
				</SwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					variant="dots"
					activeStep={activeStep}
					className={"main-content"}
					onClick={(e) => changeTabByDot(e.target)}
				/>
				<div
					id={"skip-introduction"}
					className={"skip-introduction-parent"}
				>
					<NavLink className={"skip-introduction"} to={"/home"}>
						Pular apresentação
					</NavLink>
				</div>
				<img alt={""} className={"square-icons"} src={Squares} />
			</div>
		</Slide>
	);

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

					const backgroundLayer = document.getElementById(
						"background"
					);

					switch (index) {
						case 0:
							backgroundLayer.style.backgroundColor = "#2e2b84";
							break;
						case 1:
							backgroundLayer.style.backgroundColor = "#2e96c4";
							break;
						case 2:
							backgroundLayer.style.backgroundColor = "#b26bac";
							break;
						case 3:
							backgroundLayer.style.backgroundColor = "#dbd638";
							break;
						case 4:
							backgroundLayer.style.backgroundColor = "#2e2b84";
							props.history.push("/home");
							break;
						default:
							backgroundLayer.style.backgroundColor = "#2e2b84";
							break;
					}
					if (index === 4) {
						props.history.push("/home");
					}
				}
			}
		}
	}
}

export default Welcome;
