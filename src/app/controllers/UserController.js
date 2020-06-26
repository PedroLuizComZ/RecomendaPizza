import {
	AuthRequest,
	PreCadRequest,
	ValidaTiketRequest,
	CadPasswordRequest,
	LoginRequest,
	UserInfoRequest,
	ContactRequest,
	ProfileImageRequest,
	FaqRequest,
	NoticesRequest,
	NoticeRequest,
	TrailsRequest,
	TrailRequest,
	ContentRequest,
	AcceptContractRequest,
} from "../services/UserService";
import { CheckAuthRequest } from "./CommonFunctions";

// WS001
export const AuthController = async () => {
	let date = new Date();
	let formatedDate =
		date.getFullYear() +
		"-" +
		("0" + (date.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + date.getDate()).slice(-2) +
		("0" + date.getHours()).slice(-2) +
		":" +
		(date.getMinutes() < 10 ? "0" : "") +
		date.getMinutes() +
		":00";
	const response = await AuthRequest(formatedDate);
	switch (response.httpcode) {
		case 200:
			localStorage.setItem("ApiToken", response.response.data.token);
			return "200";
		case 403:
			return "403";
		default:
			return "error";
	}
};

// WS002
export const PreCadController = async (preCadLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await PreCadRequest(preCadLabel);
	switch (response.httpcode) {
		case 200:
			localStorage.setItem("CheckPreCadResquest", "True");
			return "200";
		case 201:
			localStorage.setItem(
				"PreCadToken",
				response.response.data.tickeacesso
			);
			return "201";
		case 400:
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			PreCadController(preCadLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS003
export const ValidaTiketController = async (ApiToken) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await ValidaTiketRequest(ApiToken);
	switch (response.httpcode) {
		case 200:
			localStorage.setItem(
				"UserData",
				JSON.stringify(response.response.data)
			);
			return "200";
		case 201:
			return "201";
		case 401:
			localStorage.removeItem("ApiToken");
			ValidaTiketController(ApiToken);
			return "401";
		default:
			try {
				localStorage.setItem(
					"ErrorMessage",
					response.response.data.message
				);
			} catch (error) {
				localStorage.setItem("ErrorMessage", error);
			}
			return "error";
	}
};

// WS003
export const CadPasswordController = async (passwordLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await CadPasswordRequest(passwordLabel);
	if (response.httpcode === 200) {
		localStorage.setItem(
			"UserData",
			JSON.stringify(response.response.data)
		);
		return "200";
	} else if (response.httpcode === 201) {
		localStorage.setItem("ErrorMessage", response.response.data.message);
		return "201";
	} else {
		try {
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
		} catch (error) {
			localStorage.setItem("ErrorMessage", error);
		}
		return "error";
	}
};

// WS005
export const LoginController = async (loginLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await LoginRequest(loginLabel);
	switch (response.httpcode) {
		case 200:
			localStorage.setItem(
				"UserData",
				JSON.stringify(response.response.data)
			);
			return "200";
		case 202:
			localStorage.setItem(
				"LoginErrorMessage",
				response.response.data.message
			);
			return "202";
		case 401:
			localStorage.removeItem("ApiToken");
			LoginController(loginLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"LoginErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS019
export const UserInfoController = async (idUser) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await UserInfoRequest(idUser);
	switch (response.httpcode) {
		case 200:
			let responseData = response.response.data;
			let base64Image = responseData.imgperfil;
			responseData.imgperfil = "";
			localStorage.setItem(
				"UserData",
				JSON.stringify(response.response.data)
			);
			localStorage.setItem("IdOperacao", "1");
			return { httpcode: "200", image: base64Image };
		case 401:
			localStorage.removeItem("ApiToken");
			UserInfoController(idUser);
			return { httpcode: "401", image: "" };
		default:
			return { httpcode: "error", image: "" };
	}
};

// WS021
export const ContactController = async (contactLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await ContactRequest(contactLabel);
	switch (response.httpcode) {
		case 200:
			localStorage.setItem("CheckPreCadResquest", "True");
			return "200";
		case 201:
			localStorage.setItem(
				"PreCadToken",
				response.response.data.tickeacesso
			);
			return "201";
		case 400:
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			ContactController(contactLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS022
export const ProfileImageController = async (profileImageLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await ProfileImageRequest(profileImageLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 201:
			return "201";
		case 400:
			localStorage.setItem(
				"ProfileImageMessage",
				response.response.data.message
			);
			return "400";
		case 401:
			localStorage.removeItem("ApiToken");
			ProfileImageController(profileImageLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"ProfileImageMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};

// WS023
export const FaqController = async (contactLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await FaqRequest(contactLabel);
	switch (response.httpcode) {
		case 200:
			return {
				data: response.response.data.faq,
				httpcode: "200",
			};
		case 201:
			return {
				data: response.response.data.faq,
				httpcode: "201",
			};
		case 400:
			return {
				httpcode: "400",
			};
		case 401:
			localStorage.removeItem("ApiToken");
			ContactController(contactLabel);
			return {
				httpcode: "401",
			};
		case 403:
			return {
				httpcode: "403",
			};
		default:
			return {
				error: "error",
			};
	}
};

// WS024
export const NoticesController = async (noticesLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await NoticesRequest(noticesLabel);
	switch (response.httpcode) {
		case 200:
			return {
				data: response.response.data.noticias,
				httpcode: "200",
			};
		case 201:
			return {
				data: response.response.data.noticias,
				httpcode: "201",
			};
		case 400:
			return {
				httpcode: "400",
			};
		case 401:
			localStorage.removeItem("ApiToken");
			NoticesController(noticesLabel);
			return {
				httpcode: "401",
			};
		case 403:
			return {
				httpcode: "403",
			};
		default:
			return {
				error: "error",
			};
	}
};

// WS025
export const NoticeController = async (noticeLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await NoticeRequest(noticeLabel);
	switch (response.httpcode) {
		case 200:
			return {
				data: response.response.data,
				httpcode: "200",
			};
		case 201:
			return {
				data: response.response.data,
				httpcode: "201",
			};
		case 400:
			return {
				httpcode: "400",
			};
		case 401:
			localStorage.removeItem("ApiToken");
			NoticeController(noticeLabel);
			return {
				httpcode: "401",
			};
		case 403:
			return {
				httpcode: "403",
			};
		default:
			return {
				error: "error",
			};
	}
};

export const TrailsController = async (trailsLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await TrailsRequest(trailsLabel);
	switch (response.httpcode) {
		case 200:
			return {
				data: response.response.data.trilhas,
				httpcode: "200",
			};
		case 201:
			return {
				data: response.response.data.trilhas,
				httpcode: "201",
			};
		case 400:
			return {
				httpcode: "400",
			};
		case 401:
			localStorage.removeItem("ApiToken");
			TrailsController(trailsLabel);
			return {
				httpcode: "401",
			};
		case 403:
			return {
				httpcode: "403",
			};
		default:
			return {
				error: "error",
			};
	}
};

export const TrailController = async (trailLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await TrailRequest(trailLabel);
	switch (response.httpcode) {
		case 200:
			return {
				data: response.response.data,
				httpcode: "200",
			};
		case 201:
			return {
				data: response.response.data,
				httpcode: "201",
			};
		case 400:
			return {
				httpcode: "400",
			};
		case 401:
			localStorage.removeItem("ApiToken");
			TrailController(trailLabel);
			return {
				httpcode: "401",
			};
		case 403:
			return {
				httpcode: "403",
			};
		default:
			return {
				error: "error",
			};
	}
};

export const ContentController = async (contentLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await ContentRequest(contentLabel);
	switch (response.httpcode) {
		case 200:
			return {
				data: response.response.data,
				httpcode: "200",
			};
		case 201:
			return {
				data: response.response.data,
				httpcode: "201",
			};
		case 400:
			return {
				httpcode: "400",
			};
		case 401:
			localStorage.removeItem("ApiToken");
			ContentController(contentLabel);
			return {
				httpcode: "401",
			};
		case 403:
			return {
				httpcode: "403",
			};
		default:
			return {
				error: "error",
			};
	}
};

export const AcceptContractController = async (acceptContractLabel) => {
	const ApiTokenValid = await CheckAuthRequest();
	if (!ApiTokenValid) return "error";
	const response = await AcceptContractRequest(acceptContractLabel);
	switch (response.httpcode) {
		case 200:
			return "200";
		case 202:
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
			return "202";
		case 401:
			localStorage.removeItem("ApiToken");
			AcceptContractController(acceptContractLabel);
			return "401";
		case 403:
			localStorage.setItem(
				"ErrorMessage",
				response.response.data.message
			);
			return "403";
		default:
			return "error";
	}
};
