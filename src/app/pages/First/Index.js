import React, { useLayoutEffect, useEffect, useState } from "react";
import Second from "../Second/Index";
import ScrollToBottom from "../../components/ScrolltoBottom/ScrollToBottom";
import CovidModal from "../../components/CovidModal/CovidModal";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Images
import LeftSquares from "../../assets/images/left-squares.png";
import RightSquares from "../../assets/images/right-squares.png";

import Slide from "@material-ui/core/Slide";

const mobileHeight = window.innerHeight;

function First(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		localStorage.setItem("BackPage", "[]");
	}, []);

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
							<img
								className="side-icons left-icon"
								src={LeftSquares}
								alt=""
							/>
							<div className="side-button left-button">
								<ScrollToBottom
									height={ShowWindowDimensions("height")}
								/>
							</div>
						</div>
					</div>
					<div className="banner-title">
						<h1 style={ShowWindowDimensions("max-width")}>
							Muito Prazer, somos a <b>MMS!</b>
						</h1>
					</div>
					<div
						className="both-sides right-side"
						style={ShowWindowDimensions()}
					>
						<div className="mask">
							<img
								className="side-icons right-icon"
								src={RightSquares}
								alt={""}
							/>
							<div className="side-button right-button">
								<a
									className={"both-buttons"}
									href="/#/seja-um-parceiro"
								>
									Quero montar móveis
								</a>
							</div>
						</div>
					</div>
					<div className={"more-info-container"}>
						<span className={"more-info-text"}>Saiba mais</span>
						<ExpandMoreIcon />
					</div>
				</section>
				<CovidModal />
				<Second />
			</div>
		</Slide>
	);
}

export default First;
