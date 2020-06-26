import React, { useEffect } from "react";

import { Container } from "./Styles";
import LogoPremium from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import { backPage } from "../../../Routes.js";

export default function Error(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {});

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<img
						className={"toolbar_img"}
						alt={"Logo-Premium"}
						src={LogoPremium}
					/>
					<h1> {localStorage.getItem("ErrorMessage")} </h1>
					<button className={"button__border"}>
						<NavLink className={"cad-btn-formater"} to={"/login"}>
							<span> Ir para login</span>
						</NavLink>
					</button>
				</div>
			</Container>
		</Slide>
	);
}
