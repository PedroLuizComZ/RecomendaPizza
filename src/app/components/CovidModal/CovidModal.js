import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Covid from "../../assets/images/home/covid.jpeg";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "none",
		alignItems: "center",
		justifyContent: "center",
		maxWidth: "550px",
		margin: "auto",
	},
	paper: {
		backgroundColor: "#fbd1a8",
		border: "2px solid #000",
		maxWidth: "550px",
		width: "85vw",
	},
	root: {
		flexGrow: 1,
	},
}));

export default function CovidModal(props) {
	const classes = useStyles();

	const [open, setOpen] = useState(true);
	const [openVideo, setOpenVideo] = useState(false);

	const handleClose = () => {
		setOpen(false);
		localStorage.setItem("CovidModal", "Open");
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
			id={"covid-modal-parent"}
		>
			<Fade in={open}>
				<div
					onClick={() => setOpenVideo(true)}
					className={classes.paper}
					style={
						openVideo
							? { background: "#000" }
							: { background: "#fbd1a8" }
					}
				>
					<header className={"covid-header"}>
						<span
							onClick={() => handleClose()}
							className={"covid-header-text"}
						>
							X
						</span>
					</header>
					{!openVideo ? (
						<img
							className={"covid-image"}
							src={Covid}
							alt={"Covid"}
							onLoad={() => checkIfHasOpened()}
						/>
					) : (
						<div
							className={
								"simulator-learn-video-container video-galerry"
							}
						>
							<div
								className={"simulator-learn-video list-videos"}
							>
								<div className={"list-video"}>
									<iframe
										className={"video-background-container"}
										title={"thumbnail-1"}
										width="100%"
										height="400"
										src={
											"https://www.youtube.com/embed/Rz0GT2iytsg?rel=0"
										}
										frameBorder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					)}
				</div>
			</Fade>
		</Modal>
	);

	function checkIfHasOpened() {
		if (localStorage.getItem("CovidModal") !== "Open") {
			document.getElementById("covid-modal-parent").style.display =
				"flex";
		} else {
			setOpen(false);
		}
	}
}
