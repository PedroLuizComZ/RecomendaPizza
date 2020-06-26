import React, { useState, useEffect } from "react";

import { Container } from "./Styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { makeStyles } from "@material-ui/core/styles";
import MaskedInput from "react-text-mask";
import Slide from "@material-ui/core/Slide";
import { ConsultCityController } from "../../../controllers/AtendenceController";
import Loader from "../../../components/loader/Loader";
import useDebounce from "./Debounce";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function AtendimentoDetail(props) {
	const classes = useStyles();

	const [activeStep, setActiveStep] = useState(0);
	const [loading, setLoading] = useState(false);
	const [loadingTime, setLoadingTime] = useState(true);
	const [state, setState] = useState({
		segundaManha: true,
		segundaTarde: true,
		tercaManha: true,
		tercaTarde: true,
		quartaManha: true,
		quartaTarde: true,
		quintaManha: true,
		quintaTarde: true,
		sextaManha: true,
		sextaTarde: true,
		sabadoManha: false,
		sabadoTarde: false,
		feriadoManha: true,
		feriadoTarde: true,
	});

	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("Preencha os dados corretamente");

	const [cidadesArray, setCidadesArray] = useState([]);
	const [cidadesSelected, setCidadesSelected] = useState([]);

	const [codCidades, setCodCidades] = useState([]);

	const [cep, setCep] = useState("");

	// State and setter for search term
	const [searchTerm, setSearchTerm] = useState("");
	const [searchTermLoading, setSearchTermLoading] = useState(false);
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const handleNext = () => {
		localStorage.setItem("ConcludeEtapaView", "PRO");
		window.location.reload();
	};

	const handleBack = () => {
		localStorage.removeItem("ConcludeEtapaView");
		window.location.reload();
	};

	useEffect(() => {
		document.getElementById("toolbar_container").style.display = "flex";
		clearInputTitle();
		checkIfAnyCepExist();
		checkIfAnyCityExist();
		checkIfAnyTimeExist();
	}, []);

	useEffect(
		() => {
			// Make sure we have a value (user has entered something in input)
			if (debouncedSearchTerm) {
				setSearchTermLoading(true);
				handleKeyUp(searchTerm);
			}
		},
		// value (searchTerm) hasn't changed for more than 500ms.
		[debouncedSearchTerm]
	);

	return (
		<Slide direction="left" in={true} mountOnEnter unmountOnExit>
			<Container>
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
				{activeStep === 0 ? (
					<div className={"main-content"}>
						{JSON.parse(localStorage.getItem("UserData")).etapa ===
						"anm" ? (
							<div className={"small-white"}>
								<small>
									Seu cadastro ainda está em análise pelo
									nosso time, solicitamos que aguarde nosso
									contato.
								</small>
							</div>
						) : null}
						<h1 className={"headers-default pb-0"}>
							Local de Partida
						</h1>
						<MaskedInput
							mask={[
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								"-",
								/\d/,
								/\d/,
								/\d/,
							]}
							className="form-control text-input text-input-md ajusted-input revision-input "
							placeholder="CEP"
							guide={false}
							type="tel"
							id="cep"
							value={cep}
							onKeyUp={(e) => setCep(e.target.value)}
							autoComplete="off"
							disabled={true}
						/>
						<h1 className={"headers-default pb-0"}>
							Cidades de Atuação
						</h1>
						<div className={"detail-list-container"}>
							<span className={"detail-list-item"}>
								{loadingTime
									? ""
									: cidadesSelected.map(
											(partner, cont) =>
												partner.title + " "
									  )}
							</span>
						</div>
						<h1 className={"headers-default pb-0"}>
							Horários de atuação
						</h1>
						{loadingTime ? (
							<></>
						) : (
							<div className={"detail-list-container"}>
								{state.map((time, cont) => (
									<span
										key={cont}
										className={"detail-list-item"}
									>
										{time}
									</span>
								))}
							</div>
						)}
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
						className={classes.root}
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
							<div
								onClick={handleBack}
								disabled={activeStep === 0}
								className="begin-btn-container"
							>
								<div className={"go-back-button"}>Voltar</div>
							</div>
						}
					/>
				</footer>
			</Container>
		</Slide>
	);

	async function handleKeyUp(cityLabel) {
		let city = {
			nmcidade: cityLabel,
		};
		const response = await ConsultCityController(city);
		handleResponse(response);
	}

	function handleResponse(response) {
		switch (response) {
			case "200":
				setCidadesArray(
					JSON.parse(localStorage.getItem("CidadesArray"))
				);
				break;
			default:
				break;
		}
		setTimeout(() => {
			setSearchTermLoading(false);
		}, 450);
	}

	function clearInputTitle() {
		setInterval(() => {
			if (
				document.getElementsByClassName(
					"MuiAutocomplete-popupIndicator"
				)[0] &&
				document.getElementsByClassName(
					"MuiAutocomplete-clearIndicatorDirty"
				)[0]
			) {
				document
					.getElementsByClassName("MuiAutocomplete-popupIndicator")[0]
					.removeAttribute("title");
				document
					.getElementsByClassName(
						"MuiAutocomplete-clearIndicatorDirty"
					)[0]
					.removeAttribute("title");
			}
		}, 1000);
	}

	function checkIfAnyCepExist() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		let cepPartida =
			UserData.ceppartida.length !== 0
				? UserData.ceppartida.substr(0, 5) +
				  "-" +
				  UserData.ceppartida.substr(5, 3)
				: "";
		setCep(cepPartida);
	}

	function checkIfAnyCityExist() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));

		setCidadesSelectedArray(UserData);

		setCidadesIdArray(UserData);
	}

	function setCidadesSelectedArray(UserData) {
		let cidadesSelectedArray = cidadesSelected;
		UserData.cidade.forEach((element) => {
			cidadesSelectedArray[cidadesSelectedArray.length] = {
				title: element.nmcidade + " - " + element.coduf + ", ",
			};
		});
		if (cidadesSelectedArray.length <= 0) {
			setState([
				{
					title: " - ",
				},
			]);
			setCidadesSelected([
				{
					title: " - ",
				},
			]);
		} else {
			let cityTitle =
				cidadesSelectedArray[cidadesSelectedArray.length - 1].title;
			cityTitle = cityTitle.substring(0, cityTitle.length - 2);
			cidadesSelectedArray[
				cidadesSelectedArray.length - 1
			].title = cityTitle;
			setState(cidadesSelectedArray);
			setCidadesSelected(cidadesSelectedArray);
		}
	}

	function setCidadesIdArray(UserData) {
		let codCidadesArray = codCidades;
		UserData.cidade.forEach((element) => {
			codCidadesArray[codCidadesArray.length] = {
				codcidade: element.codcidade,
			};
		});
		setCodCidades(codCidadesArray);
	}

	function checkIfAnyTimeExist() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		let savedTime = [];

		savedTime = handleSavedTime(
			UserData.segmanha,
			savedTime,
			"segundaManha",
			UserData.segtarde,
			savedTime,
			"segundaTarde",
			"Segunda"
		);

		savedTime = handleSavedTime(
			UserData.termanha,
			savedTime,
			"tercaManha",
			UserData.tertarde,
			savedTime,
			"tercaTarde",
			"Terça"
		);

		savedTime = handleSavedTime(
			UserData.quamanha,
			savedTime,
			"quartaManha",
			UserData.quatarde,
			savedTime,
			"quartaTarde",
			"Quarta"
		);

		savedTime = handleSavedTime(
			UserData.quimanha,
			savedTime,
			"quintaManha",
			UserData.quitarde,
			savedTime,
			"quintaTarde",
			"Quinta "
		);

		savedTime = handleSavedTime(
			UserData.sexmanha,
			savedTime,
			"sextaManha",
			UserData.sextarde,
			savedTime,
			"sextaTarde",
			"Sexta"
		);

		savedTime = handleSavedTime(
			UserData.sabmanha,
			savedTime,
			"sabadoManha",
			UserData.sabtarde,
			savedTime,
			"sabadoTarde",
			"Sabado "
		);

		savedTime = handleSavedTime(
			UserData.fermanha,
			savedTime,
			"feriadoManha",
			UserData.fertarde,
			savedTime,
			"feriadoTarde",
			"Feriado"
		);

		setState(savedTime);
		setTimeout(() => {
			setLoadingTime(false);
		}, 500);
	}

	function handleSavedTime(
		timeManha,
		savedTimeArrayManha,
		labelManha,
		timeTarde,
		savedTimeArrayTarde,
		labelTarde,
		labelFormated
	) {
		if (timeManha === "sim" && timeTarde === "sim") {
			return [...savedTimeArrayManha, labelFormated + " - Manhã e Tarde"];
		} else if (timeManha === "nao" && timeTarde === "sim") {
			return [...savedTimeArrayManha, labelFormated + " - Tarde"];
		} else if (timeManha === "sim" && timeTarde === "nao") {
			return [...savedTimeArrayManha, labelFormated + " - Manhã"];
		} else {
			return savedTimeArrayManha;
		}
	}
}
