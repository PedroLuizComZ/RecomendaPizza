import React, { useState, useEffect } from "react";

import { Container } from "./Styles";

import MobileStepper from "@material-ui/core/MobileStepper";
import Loader from "../../../components/Loader/Loader";
import MaskedInput from "react-text-mask";

export default function EmpresarialDetail(props) {
	const [activeStep, setActiveStep] = React.useState(0);
	const [mei, setMei] = useState(0);
	const [loading, setLoading] = useState(false);
	const [cnpj, setCnpj] = useState("");
	const [isMei, setIsMei] = useState(false);

	useEffect(() => {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		UserData.possumei === "sim" ? setIsMei(true) : setIsMei(false);
		UserData.possumei === "sim" ? setMei("Sim") : setMei("Não");

		setCnpj(
			UserData.cnpj.substring(0, 2) +
				"." +
				UserData.cnpj.substring(2, 5) +
				"." +
				UserData.cnpj.substring(5, 8) +
				"/" +
				UserData.cnpj.substring(8, 12) +
				"-" +
				UserData.cnpj.substring(12, 14)
		);
		if (document.getElementById("toolbar_container") !== null) {
			document.getElementById("toolbar_container").style.display = "flex";
		}
	}, []);

	return (
		<Container>
			{activeStep === 0 ? (
				<div className={"main-content"}>
					{JSON.parse(localStorage.getItem("UserData")).etapa ===
					"anm" ? (
						<div className={"small-white"}>
							<small>
								Seu cadastro ainda está em análise pelo nosso
								time, solicitamos que aguarde nosso contato.
							</small>
						</div>
					) : null}
					<h1 className={"headers-default pb-0"}>CNPJ</h1>
					<MaskedInput
						mask={[
							/\d/,
							/\d/,
							".",
							/\d/,
							/\d/,
							/\d/,
							".",
							/\d/,
							/\d/,
							/\d/,
							"/",
							/\d/,
							/\d/,
							/\d/,
							/\d/,
							"-",
							/\d/,
							/\d/,
						]}
						className="form-control text-input text-input-md ajusted-input revision-input"
						placeholder=""
						guide={false}
						type="tel"
						id="cnpj"
						value={cnpj}
						autoComplete="off"
					/>
				</div>
			) : (
				<></>
			)}
			<footer className={"footer-default"}>
				<MobileStepper
					variant="dots"
					steps={1}
					position="static"
					activeStep={activeStep}
					nextButton={
						<div
							onClick={handleNext}
							disabled={activeStep === 1}
							className="begin-btn-container"
						>
							<div className={"go-forward-button"}>
								{loading ? <Loader /> : "Avançar"}
							</div>
						</div>
					}
					backButton={
						activeStep !== 0 ? (
							<div
								onClick={handleBack}
								disabled={activeStep === 0}
								className="begin-btn-container"
							>
								<div className={"go-back-button"}>Voltar</div>
							</div>
						) : (
							<div className={"bnt-spacer"}></div>
						)
					}
				/>
			</footer>
		</Container>
	);

	function handleNext() {
		localStorage.setItem("ConcludeEtapaView", "ATE");
		window.location.reload();
	}

	function handleBack() {
		if (activeStep >= 1) {
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
		}
	}
}
