import React, { useState, useEffect } from "react";

import { Container } from "./Styles";
import AtendimentoDetail from "./Detail";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import MobileStepper from "@material-ui/core/MobileStepper";
import Switch from "react-switch";
import { makeStyles } from "@material-ui/core/styles";
import MaskedInput from "react-text-mask";
import Slide from "@material-ui/core/Slide";
import {
	CadCidadeController,
	CadHorarioController,
	ConsultCityController,
} from "../../../controllers/AtendenceController";
import { UserInfoController } from "../../../controllers/UserController";
import Loader from "../../../components/loader/Loader";
import useDebounce from "./Debounce";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function Atendimento(props) {
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
	const [codCidadesExclude, setCodCidadesExclude] = useState([]);
	const [cep, setCep] = useState("");

	const [etapa, setEtapa] = useState("");

	// State and setter for search term
	const [searchTerm, setSearchTerm] = useState("");
	const [searchTermLoading, setSearchTermLoading] = useState(false);
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const handleNext = () => {
		handleActiveStep(activeStep);
	};

	const handleBack = () => {
		if (activeStep >= 1) {
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
			setErrorMessage(false);
		}
	};

	useEffect(() => {
		document.getElementById("toolbar_container").style.display = "flex";
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		setEtapa(UserData.etapa);
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
			<div>
				{etapa === "anm" || etapa === "apr" ? (
					<AtendimentoDetail />
				) : (
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
								<h1
									className={
										"headers-default pb-0 starter-place-title"
									}
								>
									Local de Partida
								</h1>
								<small
									className={
										"small-white starter-place-label"
									}
								>
									(CEP do local de onde você gostaria de
									iniciar seus serviços)
								</small>
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
									className="form-control text-input text-input-md ajusted-input"
									placeholder="CEP"
									guide={false}
									type="tel"
									id="cep"
									value={cep}
									onKeyUp={(e) => setCep(e.target.value)}
									autoComplete="off"
								/>
								<h1 className={"headers-default pb-0"}>
									Cidades de Atuação
								</h1>
								<Autocomplete
									multiple
									id="tags-outlined"
									options={cidadesArray}
									getOptionLabel={(option) => option.title}
									filterSelectedOptions
									noOptionsText={
										searchTerm !== ""
											? "Cidade não encontrada"
											: "Procurando a cidade desejada"
									}
									renderInput={(params) => (
										<TextField
											{...params}
											variant="outlined"
											label=""
											placeholder=""
										/>
									)}
									loading={searchTermLoading}
									loadingText={"Procurando a cidade desejada"}
									onKeyUp={(e) =>
										setSearchTerm(e.target.value)
									}
									defaultValue={cidadesSelected}
									onChange={(event, value, id) =>
										handleSelectedOptions(value, event)
									}
									onFocus={() => handleFocusAutocomplete()}
								/>
							</div>
						) : loadingTime ? (
							<></>
						) : (
							<div className={"main-content"}>
								<h1 className={"headers-default pb-0"}>
									Horários de atuação
								</h1>
								<div className="table-container">
									<table cellSpacing={"0"}>
										<tbody>
											<tr>
												<th></th>
												<th>Manhã</th>
												<th>Tarde</th>
											</tr>
											<tr>
												<td>Segunda</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.segundaManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="segundaManha"
															name="segundaManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.segundaTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="segundaTarde"
															name="segundaTarde"
														/>
													</div>
												</td>
											</tr>
											<tr>
												<td>Terça</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.tercaManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="tercaManha"
															name="tercaManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.tercaTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="tercaTarde"
															name="tercaTarde"
														/>
													</div>
												</td>
											</tr>
											<tr>
												<td>Quarta</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.quartaManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="quartaManha"
															name="quartaManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.quartaTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="quartaTarde"
															name="quartaTarde"
														/>
													</div>
												</td>
											</tr>
											<tr>
												<td>Quinta</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.quintaManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="quintaManha"
															name="quintaManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.quintaTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="quintaTarde"
															name="quintaTarde"
														/>
													</div>
												</td>
											</tr>
											<tr>
												<td>Sexta</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.sextaManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="sextaManha"
															name="sextaManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.sextaTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="sextaTarde"
															name="sextaTarde"
														/>
													</div>
												</td>
											</tr>
											<tr>
												<td>Sábado</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.sabadoManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="sabadoManha"
															name="sabadoManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.sabadoTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="sabadoTarde"
															name="sabadoTarde"
														/>
													</div>
												</td>
											</tr>

											<tr>
												<td className="min-width-column">
													Feriado
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.feriadoManha
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="feriadoManha"
															name="feriadoManha"
														/>
													</div>
												</td>
												<td>
													<div
														className={
															"display-flex--center"
														}
													>
														<Switch
															checked={
																state.feriadoTarde
															}
															onChange={
																handleChangeCheckbox
															}
															offColor="#2e2b84"
															onColor="#f98c29"
															onHandleColor="#FFFFFF"
															handleDiameter={20}
															uncheckedIcon={
																false
															}
															checkedIcon={false}
															boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
															activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
															height={30}
															width={50}
															className="react-switch"
															id="feriadoTarde"
															name="feriadoTarde"
														/>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<small
									className={"small-white time-info-label"}
								>
									Aos sábados e feriados podem ocorrer
									variações conforme a sazonalidade da
									demanda.
								</small>
							</div>
						)}
						<footer className={"footer-default"}>
							<MobileStepper
								variant="dots"
								steps={2}
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
									activeStep !== 0 ? (
										<div
											onClick={handleBack}
											disabled={activeStep === 0}
											className="begin-btn-container"
										>
											<div className={"go-back-button"}>
												Voltar
											</div>
										</div>
									) : (
										<div className={"bnt-spacer"}></div>
									)
								}
							/>
						</footer>
					</Container>
				)}
			</div>
		</Slide>
	);

	function handleActiveStep(activeStep) {
		setLoading(true);
		switch (activeStep) {
			case 0:
				handleCadCidade();
				break;
			case 1:
				handleCadHoras();
				break;
			default:
				console.log(activeStep);
				break;
		}
	}

	async function handleCadCidade() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		const cidadeLabel = {
			idusuario: UserData.idusuario,
			ceppartida: cep.replace(/[^\w\s]/gi, ""),
			cidadeatuacaoinc: codCidades,
			cidadeatuacaoexc: codCidadesExclude,
		};
		const response = await CadCidadeController(cidadeLabel);
		if (response === "200") {
			setLoading(false);
			await UserInfoController({
				idusuario: UserData.idusuario,
			});
			if (response === "200") {
				checkIfAnyCityExistOnSamePage();
				localStorage.setItem("CidadeData", JSON.stringify(cidadeLabel));
				setActiveStep((prevActiveStep) => prevActiveStep + 1);
			} else {
				handleError(localStorage.getItem("CadCidadeErrorMessage"));
				setLoading(false);
			}

			setErrorMessage(false);
		} else {
			handleError(localStorage.getItem("CadCidadeErrorMessage"));
			setLoading(false);
		}
	}

	async function handleCadHoras() {
		let segundaManha = document.getElementById("segundaManha").checked
			? "sim"
			: "nao";
		let segundaTarde = document.getElementById("segundaTarde").checked
			? "sim"
			: "nao";
		let tercaManha = document.getElementById("tercaManha").checked
			? "sim"
			: "nao";
		let tercaTarde = document.getElementById("tercaTarde").checked
			? "sim"
			: "nao";
		let quartaManha = document.getElementById("quartaManha").checked
			? "sim"
			: "nao";
		let quartaTarde = document.getElementById("quartaTarde").checked
			? "sim"
			: "nao";
		let quintaManha = document.getElementById("quintaManha").checked
			? "sim"
			: "nao";
		let quintaTarde = document.getElementById("quintaTarde").checked
			? "sim"
			: "nao";
		let sextaManha = document.getElementById("sextaManha").checked
			? "sim"
			: "nao";
		let sextaTarde = document.getElementById("sextaTarde").checked
			? "sim"
			: "nao";
		let sabadoManha = document.getElementById("sabadoManha").checked
			? "sim"
			: "nao";
		let sabadoTarde = document.getElementById("sabadoTarde").checked
			? "sim"
			: "nao";

		let feriadoManha = document.getElementById("feriadoManha").checked
			? "sim"
			: "nao";
		let feriadoTarde = document.getElementById("feriadoTarde").checked
			? "sim"
			: "nao";

		const UserData = JSON.parse(localStorage.getItem("UserData"));
		const horasLabel = {
			idusuario: UserData.idusuario,
			segmanha: segundaManha,
			segtarde: segundaTarde,
			termanha: tercaManha,
			tertarde: tercaTarde,
			quamanha: quartaManha,
			quatarde: quartaTarde,
			quimanha: quintaManha,
			quitarde: quintaTarde,
			sexmanha: sextaManha,
			sextarde: sextaTarde,
			sabmanha: sabadoManha,
			sabtarde: sabadoTarde,
			fermanha: feriadoManha,
			fertarde: feriadoTarde,
		};
		const response = await CadHorarioController(horasLabel);
		if (response === "200") {
			setLoading(false);
			localStorage.setItem("CidadeData", JSON.stringify(horasLabel));
			setErrorMessage(false);
			window.location.reload();
		} else {
			handleError(localStorage.getItem("CadHorarioErrorMessage"));
			setLoading(false);
		}
	}

	function handleChangeCheckbox(checked, event, id) {
		setState({ ...state, [id]: checked });
	}

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

	function handleSelectedOptions(arrayAutocomplete, event) {
		let itemSelected = arrayAutocomplete[arrayAutocomplete.length - 1];
		let CidadesArray = JSON.parse(localStorage.getItem("CidadesArray"));
		let CidadesIdArray = JSON.parse(localStorage.getItem("CidadesIdArray"));

		if (arrayAutocomplete.length > cidadesSelected.length) {
			let cont = 0;
			CidadesArray.forEach((element) => {
				try {
					if (element.title === itemSelected.title) {
						let codCidadesArray = codCidades;
						codCidadesArray[codCidadesArray.length] = {
							codcidade: CidadesIdArray[cont],
						};
						setCodCidades(codCidadesArray);
					}
				} catch (error) {}

				cont++;
			});
		} else {
			setCidadesSelected(arrayAutocomplete);
			let codCidadesExcludeValue = codCidadesExclude;
			codCidadesExcludeValue[codCidadesExcludeValue.length] =
				codCidades[0];
			setCodCidadesExclude(codCidadesExcludeValue);
			setCodCidades(codCidades.slice(1));
		}
	}

	function handleError(message) {
		setErrorMessage(true);
		setMessage(message);
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

	function checkIfAnyCityExistOnSamePage() {
		const UserData = JSON.parse(localStorage.getItem("UserData"));

		setCidadesSelectedArrayOnSamePage(UserData);
		setCidadesIdArrayOnSamePage(UserData);
	}

	function setCidadesSelectedArray(UserData) {
		let cidadesSelectedArray = cidadesSelected;
		UserData.cidade.forEach((element) => {
			cidadesSelectedArray[cidadesSelectedArray.length] = {
				title: element.nmcidade + " - " + element.coduf,
			};
		});
		setCidadesSelected(cidadesSelectedArray);
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

	function setCidadesSelectedArrayOnSamePage(UserData) {
		let cidadesSelectedArray = [];
		UserData.cidade.forEach((element) => {
			cidadesSelectedArray[cidadesSelectedArray.length] = {
				title: element.nmcidade + " - " + element.coduf,
			};
		});
		setCidadesSelected(cidadesSelectedArray);
	}

	function setCidadesIdArrayOnSamePage(UserData) {
		let codCidadesArray = [];
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
			"segundaManha"
		);

		savedTime = handleSavedTime(
			UserData.segtarde,
			savedTime,
			"segundaTarde"
		);

		savedTime = handleSavedTime(UserData.termanha, savedTime, "tercaManha");
		savedTime = handleSavedTime(UserData.tertarde, savedTime, "tercaTarde");

		savedTime = handleSavedTime(
			UserData.quamanha,
			savedTime,
			"quartaManha"
		);
		savedTime = handleSavedTime(
			UserData.quatarde,
			savedTime,
			"quartaTarde"
		);

		savedTime = handleSavedTime(
			UserData.quimanha,
			savedTime,
			"quintaManha"
		);
		savedTime = handleSavedTime(
			UserData.quitarde,
			savedTime,
			"quintaTarde"
		);

		savedTime = handleSavedTime(UserData.sexmanha, savedTime, "sextaManha");
		savedTime = handleSavedTime(UserData.sextarde, savedTime, "sextaTarde");

		savedTime = handleSavedTime(
			UserData.sabmanha,
			savedTime,
			"sabadoManha"
		);
		savedTime = handleSavedTime(
			UserData.sabtarde,
			savedTime,
			"sabadoTarde"
		);

		savedTime = handleSavedTime(
			UserData.fermanha,
			savedTime,
			"feriadoManha"
		);
		savedTime = handleSavedTime(
			UserData.fertarde,
			savedTime,
			"feriadoTarde"
		);

		setState(savedTime);
		setLoadingTime(false);
	}

	function handleSavedTime(time, savedTimeArray, label) {
		if (time === "sim") {
			return { ...savedTimeArray, [label]: true };
		} else {
			return { ...savedTimeArray, [label]: false };
		}
	}

	function handleFocusAutocomplete() {
		document.getElementById("tags-outlined").autocomplete = "off";
	}
}
