import React, { useEffect, useState } from "react";

import { Container } from "./Styles";
import Etapa1 from "../../assets/images/etapa1.svg";
import Etapa2 from "../../assets/images/etapa2.svg";
import Etapa3 from "../../assets/images/etapa3.svg";
import Etapa4 from "../../assets/images/etapa4.svg";
import Etapa5 from "../../assets/images/etapa5.svg";
import Etapa6 from "../../assets/images/etapa6.svg";
import { NavLink } from "react-router-dom";

import Slide from "@material-ui/core/Slide";
import { UserInfoController } from "../../controllers/UserController";
import FooterMessageProgress from "../../components/FooterMessage/FooterMessageProgress.js";

export default function Progress(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		RefreshUserData();
	});

	const [etapa, setEtapa] = useState("");

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
				<div className={"main-content"}>
					<div className={"icon-container"}>
						<div
							style={etapa >= 1 ? { background: "#1bae45" } : {}}
							className={"image-background"}
						>
							<img
								className={"etapa-img img-except"}
								alt={"Logo-Premium"}
								src={Etapa1}
							/>
						</div>
						<span style={etapa >= 1 ? { color: "#1bae45" } : {}}>
							Pré Cadastro
						</span>
					</div>
					<div
						style={etapa >= 1 ? { background: "#1bae45" } : {}}
						className="risc"
					/>
					<div className={"icon-container"}>
						<div
							style={etapa >= 2 ? { background: "#1bae45" } : {}}
							className={"image-background"}
						>
							<img
								className={"etapa-img"}
								alt={"Logo-Premium"}
								src={Etapa2}
							/>
						</div>
						<span style={etapa >= 2 ? { color: "#1bae45" } : {}}>
							Perfil Empresarial
						</span>
					</div>
				</div>
				<div className={"main-content"}>
					<div className={"icon-container"}>
						<div
							style={etapa >= 3 ? { background: "#1bae45" } : {}}
							className={"image-background"}
						>
							<img
								className={"etapa-img"}
								alt={"Logo-Premium"}
								src={Etapa3}
							/>
						</div>
						<span style={etapa >= 3 ? { color: "#1bae45" } : {}}>
							Perfil Atendimento
						</span>
					</div>
					<div
						style={etapa >= 3 ? { background: "#1bae45" } : {}}
						className="risc"
					/>
					<div className={"icon-container"}>
						<div
							style={etapa >= 4 ? { background: "#1bae45" } : {}}
							className={"image-background"}
						>
							<img
								className={"etapa-img"}
								alt={"Logo-Premium"}
								src={Etapa4}
							/>
						</div>
						<span style={etapa >= 4 ? { color: "#1bae45" } : {}}>
							Perfil Profissional
						</span>
					</div>
				</div>
				<div className={"main-content"}>
					<div className={"icon-container"}>
						<div
							style={etapa >= 4 ? { background: "#1bae45" } : {}}
							className={"image-background"}
						>
							<img
								className={"etapa-img"}
								alt={"Logo-Premium"}
								src={Etapa5}
							/>
						</div>
						<span style={etapa >= 4 ? { color: "#1bae45" } : {}}>
							Análise pela MMS
						</span>
					</div>
					<div
						style={etapa >= 4 ? { background: "#1bae45" } : {}}
						className="risc"
					/>
					<div className={"icon-container"}>
						<div
							style={etapa >= 6 ? { background: "#1bae45" } : {}}
							className={"image-background"}
						>
							<img
								className={"etapa-img"}
								alt={"Logo-Premium"}
								src={Etapa6}
							/>
						</div>
						<span style={etapa >= 6 ? { color: "#1bae45" } : {}}>
							Cadastro Aprovado
						</span>
					</div>
				</div>
				<div className={"finish-container"}>
					<NavLink to={"indicacao"}>
						<div className="begin-btn-container">
							<div
								className={
									"finish-container-btn-indication go-back-button finish-container-btn"
								}
							>
								Quero indicar montadores
							</div>
						</div>
					</NavLink>
					<NavLink to={"galeria-de-video"}>
						<div className="begin-btn-container">
							<div
								className={
									"finish-container-btn-about go-back-button finish-container-btn"
								}
							>
								Conhecer mais sobre a MMS
							</div>
						</div>
					</NavLink>
				</div>
				<FooterMessageProgress className={"footer-message-progress"} />
			</Container>
		</Slide>
	);

	async function RefreshUserData() {
		let UserData = JSON.parse(localStorage.getItem("UserData"));

		await UserInfoController({
			idusuario: UserData.idusuario,
		});

		UserData = JSON.parse(localStorage.getItem("UserData"));
		handleEtapa(UserData.etapa);
	}

	function handleEtapa(etapa) {
		switch (etapa) {
			case "pem":
				setEtapa(1);
				break;
			case "pat":
				setEtapa(2);
				break;
			case "ppr":
				setEtapa(3);
				break;
			case "anm":
				setEtapa(4);
				break;
			case "apr":
				setEtapa(6);
				break;
			case "com":
				setEtapa(6);
				break;
			default:
				console.log(etapa);
				break;
		}
	}
}
