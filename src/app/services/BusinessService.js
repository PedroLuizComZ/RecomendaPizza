import API from "./API";

// WS009
export const BusinessRequest = async (professionalLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/cadastrar-perfil-empresarial", professionalLabel, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("ApiToken"),
			},
		})
			.then((response) => {
				let responseObject = {
					httpcode: response.status,
					response: response,
				};
				resolve(responseObject);
			})
			.catch((error) => {
				let responseObject;
				if (error.response !== undefined) {
					responseObject = {
						httpcode: error.response.status,
						response: error.response,
					};
				} else {
					responseObject = {
						httpcode: "error",
						response: "error",
					};
				}
				resolve(responseObject);
			});
	});
};

// WS010
export const PartnerRequest = async (partnerLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/cadastrar-parceiros", partnerLabel, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("ApiToken"),
			},
		})
			.then((response) => {
				let responseObject = {
					httpcode: response.status,
					response: response,
				};
				resolve(responseObject);
			})
			.catch((error) => {
				let responseObject;
				if (error.response !== undefined) {
					responseObject = {
						httpcode: error.response.status,
						response: error.response,
					};
				} else {
					responseObject = {
						httpcode: "error",
						response: "error",
					};
				}
				resolve(responseObject);
			});
	});
};
