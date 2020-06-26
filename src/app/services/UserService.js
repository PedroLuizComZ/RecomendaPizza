import API from "./API";

// WS001
export const AuthRequest = async (formatedDate) => {
	return new Promise(async function (resolve, reject) {
		API.post(
			"/auth",
			{
				timestamp: formatedDate,
				apitoken: process.env.REACT_APP_API_TOKEN,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
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

// WS002
export const PreCadRequest = async (preCadLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/pre-cadastro-usuario", preCadLabel, {
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

// WS003
export const ValidaTiketRequest = async (ApiToken) => {
	return new Promise(async function (resolve, reject) {
		API.post(
			"/validar-ticket-acesso",
			{
				ticketacesso: ApiToken,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("ApiToken"),
				},
			}
		)
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

// WS003
export const CadPasswordRequest = async (passwordLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/cadastrar-senha-acesso", passwordLabel, {
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

// WS005
export const LoginRequest = async (loginLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/realizar-login", loginLabel, {
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

// WS019
export const UserInfoRequest = async (idUser) => {
	return new Promise(async function (resolve, reject) {
		API.post("/detalhe-usuario", idUser, {
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

// WS0021
export const ContactRequest = async (contactLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/fale-conosco", contactLabel, {
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

// WS0022
export const ProfileImageRequest = async (faqLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/enviar-img-perfil", faqLabel, {
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

// WS0023
export const FaqRequest = async (faqLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/listar-faq", faqLabel, {
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

// WS0024
export const NoticesRequest = async (noticesLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/listar-noticias", noticesLabel, {
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

// WS0025
export const NoticeRequest = async (noticeLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/detalhe-noticia", noticeLabel, {
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

export const TrailsRequest = async (trailsLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/listar-trilhas", trailsLabel, {
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

export const TrailRequest = async (trailLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/detalhe-trilha", trailLabel, {
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

export const ContentRequest = async (contentLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/detalhe-conteudo", contentLabel, {
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

export const AcceptContractRequest = async (acceptContractLabel) => {
	return new Promise(async function (resolve, reject) {
		API.post("/aceitar-contrato", acceptContractLabel, {
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
