import {
	ProfessionalRequest,
	PartnerRequest,
	FinishCadRequest,
	GetPartnerRequest,
} from "../services/ProfessionalService";
import { CheckAuthRequest } from "./CommonFunctions";

// WS009
export const ProfessionalController = async (professionalLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await ProfessionalRequest(professionalLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			localStorage.setItem(
				"ProfessionalErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"ProfessionalErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			ProfessionalController(professionalLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"ProfessionalErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS010
export const PartnerController = async (partnerLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await PartnerRequest(partnerLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			localStorage.setItem(
				"ProfessionalErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"ProfessionalErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			PartnerController(partnerLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"ProfessionalErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS014
export const GetPartnerController = async () => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await GetPartnerRequest();
	switch (response.httpcode) {
		case 200:
			localStorage.setItem(
				"PartnerData",
				JSON.stringify(response.response.data)
			);
			return "200";
		case 201:
			localStorage.setItem(
				"GetPartnerErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"GetPartnerErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			GetPartnerController();
			return "401";
		case 403:
			localStorage.setItem(
				"GetPartnerErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS018
export const FinishCadController = async (finishLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await FinishCadRequest(finishLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			localStorage.setItem(
				"FinishCadErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"FinishCadErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			FinishCadController(finishLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"FinishCadErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};
