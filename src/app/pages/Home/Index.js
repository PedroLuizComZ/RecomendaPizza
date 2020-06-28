import React, { useLayoutEffect, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import {
	RecomendedPizzaController,
	PointsPizzaController,
} from "../../controllers/PizzaController";

import Slide from "@material-ui/core/Slide";

const mobileHeight = window.innerHeight;

function Home(props) {
	useEffect(() => {}, []);

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
		var [width, height] = useWindowSize();

		var windowHeight = "";
		var paddingTop = "";
		var scrollToBottom = 0;
		var maxWidth = width - 20;

		if (width > 991) {
			windowHeight = height - 112 + "px";
			scrollToBottom = height;
		} else {
			windowHeight = (height - 56) / 2 + "px";
			scrollToBottom = height;
			maxWidth = width;

			windowHeight = (mobileHeight - 56) / 2 + "px";
		}

		maxWidth += "px";

		if (props === "max-width") {
			const maxWidthStyle = {
				maxWidth: maxWidth,
			};

			return maxWidthStyle;
		}

		if (props === "height") {
			return scrollToBottom;
		}

		if (props === "padding") {
			const heightStyle = {
				paddingTop: paddingTop,
			};

			return heightStyle;
		}

		const heightStyle = {
			height: windowHeight,
		};

		return heightStyle;
	}

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<div>
				<section
					className="home-banner"
					style={ShowWindowDimensions("padding")}
				>
					<div
						className="both-sides left-side"
						style={ShowWindowDimensions()}
					>
						<div className="mask">
							<div className="side-button right-button">
								<div
									onClick={() => handleClick()}
									className={"both-buttons"}
								>
									Recomendação do Chef
								</div>
							</div>
						</div>
					</div>
					<div
						className="both-sides right-side"
						style={ShowWindowDimensions()}
					>
						<div className="mask">
							<div className="side-button right-button">
								<NavLink
									to={"tamanho-pizza"}
									onClick={() => handleClickMakePizza()}
									className={"both-buttons"}
								>
									Quero montar minha Pizza
								</NavLink>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Slide>
	);

	async function handleClick() {
		const responseRecomended = await RecomendedPizzaController();
		localStorage.setItem("PizzaData", JSON.stringify(responseRecomended));
		const responsePoints = await PointsPizzaController();
		localStorage.setItem("PointsPizza", JSON.stringify(responsePoints));
		props.history.push("resumo-pizza");
	}

	function handleClickMakePizza() {
		localStorage.removeItem("PizzaData");
		localStorage.removeItem("PointsPizza");
	}
}

export default Home;
