import { AuthController } from "./UserController";

export const CheckAuthRequest = async () => {
	if (localStorage.getItem("ApiToken") === null) {
		const response = await AuthController();
		if (response === "200") {
			localStorage.clear();
			window.location.href = process.env.REACT_APP_API_URL_DEFAUT;
		} else {
			return false;
		}
	} else {
		return true;
	}
};
