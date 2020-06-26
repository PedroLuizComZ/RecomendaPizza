import React, { useEffect, useState } from "react";

import { Container } from "./Styles";
import MaskedInput from "react-text-mask";
import Slide from "@material-ui/core/Slide";
import { PreCadController } from "../../controllers/UserController";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		maxWidth: "550px",
		margin: "auto",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	root: {
		flexGrow: 1,
	},
}));

export default function Indication(props) {
	const classes = useStyles();
	const [telephone, setTelephone] = useState("");
	const [name, setName] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("Preencha os dados corretamente");

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		// Atualiza o titulo do documento usando a API do browser
		document.getElementById("sidebar_btn").style.display = "none";
	}, []);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<header>
						<h1>Quero indicar</h1>
						<p>
							Agora que você já conhece mais sobre a MMS, que tal
							indicar seus amigos montadores de móveis para
							fazerem parte desta rede assim como você?
						</p>
						<h3>
							Nos informe os dados abaixo, e em breve o
							contataremos.
						</h3>
					</header>
					<br />
					<section className={"flex-column"}>
						<label
							style={
								errorMessage
									? { display: "block" }
									: { display: "none" }
							}
							className={"mb-10 error-message"}
						>
							{message}
						</label>
						<span className="login-span">Nome Completo</span>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type={"text"}
							maxLength={150}
							className={"pre-cad-input"}
							autoComplete="off"
						/>
						<span className="login-span">
							Telefone com WhatsApp (número com DDD)
						</span>
						<MaskedInput
							id={"telephone"}
							type={"tel"}
							placeholder={""}
							mask={[
								"+",
								"5",
								"5",
								" ",
								"(",
								/\d/,
								/\d/,
								")",
								" ",
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								"-",
								/\d/,
								/\d/,
								/\d/,
								/\d/,
							]}
							value={telephone}
							onChange={(e) => setTelephone(e.target.value)}
							className={"pre-cad-input"}
							autoComplete="off"
							onFocus={() => handleFocus()}
						/>
						<button
							onClick={() => handleClickCad()}
							className={"button__border"}
						>
							<span>Indicar</span>
						</button>
						<br />
					</section>
				</div>
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
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<h3
								className={
									"modal-text-color transition-modal-description"
								}
							>
								Indicação feita com sucesso!
							</h3>
							<p
								className={
									"modal-text-color transition-modal-description"
								}
							>
								Deseja continuar indicando ou retornar ao seu
								perfil?
							</p>
							<br />
							<div className="modal-btn-container">
								<div
									onClick={() => handleProfile()}
									className="begin-btn-container"
								>
									<div className={"question-button"}>
										Perfil
									</div>
								</div>
								<div
									onClick={() => handleIndication()}
									className="begin-btn-container"
								>
									<div className={"question-button"}>
										Indicar
									</div>
								</div>
							</div>
						</div>
					</Fade>
				</Modal>
			</Container>
		</Slide>
	);

	async function handleClickCad() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (telephone.replace(/[_]+/g, "").length >= 19) {
			let ddi = telephone.split(" ")[0].replace("+", "");
			let ddd = telephone.split(" ")[1].replace("(", "");
			ddd = ddd.replace(")", "");
			let telephoneValue = telephone.split(" ")[2].replace("-", "");
			if (
				telephoneValue.length === 9 &&
				ddi.length >= 2 &&
				ddd.length >= 2 &&
				name.length >= 1
			) {
				const preCadLabel = {
					ddi: ddi,
					ddd: ddd,
					celular: telephoneValue,
					nmusuario: name,
					flindica: "sim",
					indicadopor: UserData.idusuario,
					email: "",
				};
				const response = await PreCadController(preCadLabel);
				handleResponse(response);
			} else {
				handleError("Preencha os dados corretamente");
			}
		} else {
			handleError("Preencha os dados corretamente");
		}
	}

	function handleResponse(response) {
		switch (response) {
			case "200":
				handleOpen();
				break;
			case "201":
				handleOpen();
				break;
			case "400":
				handleError(localStorage.getItem("ErrorMessage"));
				break;
			case "403":
				handleError(localStorage.getItem("ErrorMessage"));
				break;
			default:
				handleError("Preencha os dados corretamente");
				break;
		}
	}

	function handleError(message) {
		setErrorMessage(true);
		setMessage(message);
	}

	function handleProfile() {
		handleClose();
		props.history.push("home");
	}

	function handleIndication() {
		handleClose();
		setName("");
		setTelephone("");
	}

	function handleFocus() {
		if (telephone === "") {
			setTelephone("+55");
			setTimeout(() => {
				document.getElementById("telephone").setSelectionRange(3, 3);
			}, 200);
		}
	}
}
