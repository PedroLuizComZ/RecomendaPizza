import React, { useEffect } from "react";
import LogoPizza from "../../assets/images/logo-pizza.svg";

import { createHashHistory } from "history";

import { NavLink } from "react-router-dom";

export const history = createHashHistory();

export default function TemporaryDrawer(props) {
	useEffect(() => {}, []);

	return (
		<>
			<header className={"toolbar_parent"}>
				<div id={"toolbar_container"} className={"toolbar_container"}>
					<NavLink className={"toolbar_link"} to="/">
						<img
							className={"toolbar_img"}
							alt={"Logo-Premium"}
							src={LogoPizza}
						/>
						<h1 className={"toolbar-logo-text"}>Recomenda Pizza</h1>
					</NavLink>
				</div>
			</header>
		</>
	);
}
