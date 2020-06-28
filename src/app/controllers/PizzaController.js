import {
	SizePizzaRequest,
	FlavorsPizzaRequest,
} from "../services/PizzaService";

export const SizePizzaController = async () => {
	const response = await SizePizzaRequest();
	return response;
};

export const FlavorsPizzaController = async () => {
	const response = await FlavorsPizzaRequest();
	return response;
};
