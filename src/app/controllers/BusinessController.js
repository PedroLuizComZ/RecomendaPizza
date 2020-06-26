import { BusinessRequest } from "../services/BusinessService";
import { CheckAuthRequest } from "./CommonFunctions";

// WS011
export const BusinessController = async (partnerLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await BusinessRequest(partnerLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			localStorage.setItem(
				"BusinessErrorMessage",
				response.response.data.message
			);
			return "201";
		case 400:
			localStorage.setItem(
				"BusinessErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			BusinessController(partnerLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"BusinessErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};
