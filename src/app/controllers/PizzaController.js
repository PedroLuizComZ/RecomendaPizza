import {
	SizePizzaRequest,
	FlavorsPizzaRequest,
	RecomendedPizzaRequest,
	PointsPizzaRequest,
} from "../services/PizzaService";

export const SizePizzaController = async () => {
	const response = await SizePizzaRequest();
	return response;
};

export const FlavorsPizzaController = async () => {
	const response = await FlavorsPizzaRequest();
	return response;
};

export const RecomendedPizzaController = async () => {
	const response = await RecomendedPizzaRequest();
	return response;
};

export const PointsPizzaController = async () => {
	const response = await PointsPizzaRequest();
	return response;
};
