import React, { useEffect } from "react";

import { Container } from "./Styles";
import { backPage } from "../../../Routes.js";
import Slide from "@material-ui/core/Slide";

export default function PreCadMessage(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		if (localStorage.getItem("CheckPreCadResquest") === "True") {
			localStorage.removeItem("CheckPreCadResquest");
		} else {
			props.history.push("/login");
		}
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<div>
						<h1>Confira o link enviado no seu whatsapp.</h1>
					</div>
				</div>
			</Container>
		</Slide>
	);
}
