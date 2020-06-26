import {
	CadCidadeRequest,
	CadHorarioRequest,
	ConsultCityRequest,
} from "../services/AtendenceService";
import { CheckAuthRequest } from "./CommonFunctions";

// WS006
export const CadCidadeController = async (cidadeLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await CadCidadeRequest(cidadeLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			localStorage.setItem(
				"CadCidadeErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"CadCidadeErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			CadCidadeController(cidadeLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"CadCidadeErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS008
export const CadHorarioController = async (horasLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await CadHorarioRequest(horasLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			localStorage.setItem(
				"CadHorarioErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"CadHorarioErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			CadHorarioController(horasLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"CadHorarioErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS008
export const ConsultCityController = async (cityLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await ConsultCityRequest(cityLabel);
	switch (response.httpcode) {
		case 200:
			let cidadesArray = [];
			let cidadesIdArray = [];
			response.response.data.forEach((element) => {
				cidadesArray[cidadesArray.length] = {
					title: element.nmcidade + " - " + element.coduf,
				};
				cidadesIdArray[cidadesIdArray.length] = element.codcidade;
			});
			localStorage.setItem("CidadesArray", JSON.stringify(cidadesArray));
			localStorage.setItem(
				"CidadesIdArray",
				JSON.stringify(cidadesIdArray)
			);
			return "200";
		default:
			return "error";
	}
};
