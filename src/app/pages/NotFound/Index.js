import React, { useEffect } from "react";

import { Container } from "./Styles";
import LogoPremium from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Slide from "@material-ui/core/Slide";

export default function NotFound(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {});

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<h1> Pagina não encontrada </h1>
					<button className={"button__border"}>
						<NavLink className={"cad-btn-formater"} to={"/"}>
							<span> Voltar para home</span>
						</NavLink>
					</button>
				</div>
			</Container>
		</Slide>
	);
}
