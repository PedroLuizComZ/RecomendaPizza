import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./Styles";
import Logo from "../../assets/images/logo.png";
import { backPage } from "../../../Routes.js";

import Slide from "@material-ui/core/Slide";

export default function Message(props) {
	const [celular, setCelular] = useState("");
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		const celularValue = localStorage.getItem("Celular");
		var lastFive = celularValue.substr(celularValue.length - 4);
		setCelular(lastFive);
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<img alt={"Logo"} src={Logo} />
					<p id="form-dialog-title">
						O link para recuperação da sua senha foi enviado para o
						celular com final: *****-{celular} .
					</p>
					<button className={"button__border"}>
						<NavLink to="/login">Continuar</NavLink>
					</button>
				</div>
			</Container>
		</Slide>
	);
}
