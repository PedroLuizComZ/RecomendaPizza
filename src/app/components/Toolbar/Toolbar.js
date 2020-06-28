import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import LogoPizza from "../../assets/images/logo-pizza.svg";

import { createHashHistory } from "history";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
	list: {
		width: 270,
	},
	fullList: {
		width: "auto",
	},
});

export const history = createHashHistory();

export default function TemporaryDrawer(props) {
	useEffect(() => {}, []);

	const classes = useStyles();
	const [state, setState] = useState({
		right: false,
	});

	const toggleDrawer = (side, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState({ ...state, [side]: open });
	};

	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List className="sidebar-drawer">
				<ListItem button>
					<NavLink
						className={"link-sidebar"}
						to={"../../../../../../../../../bem-vindo"}
					>
						<ListItemIcon>
							<ChromeReaderModeIcon className={"sidebar-icon"} />
						</ListItemIcon>
						<ListItemText primary={"Seja Bem-Vindo"} />
					</NavLink>
				</ListItem>
			</List>
		</div>
	);

	// NAVBAR MENU
	const navList = () => (
		<List className="navbar-menu">
			<NavLink
				className="navbar-button"
				aria-controls="simple-menu"
				aria-haspopup="true"
				to={"../../../../../../../../../bem-vindo"}
			>
				<span>Boas-Vindas</span>
			</NavLink>
		</List>
	);
	// END NAVBAR MENU

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

					{navList()}

					<Button
						title={""}
						id={"sidebar_btn"}
						className={"sidebar-btn"}
						onClick={() => handleClick()}
					>
						<MenuIcon />
					</Button>
					<Drawer
						anchor="right"
						open={state.right}
						onClose={toggleDrawer("right", false)}
					>
						{sideList("right")}
					</Drawer>
				</div>
			</header>
		</>
	);

	function handleClick() {
		setState({ ...state, right: true });
	}
}
