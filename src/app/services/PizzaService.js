export const SizePizzaRequest = async () => {
	return new Promise(async function (resolve, reject) {
		resolve([
			{
				name: "Brotinho",
				size: 4,
			},
			{
				name: "Grande",
				size: 6,
			},
			{
				name: "Família",
				size: 8,
			},
		]);
	});
};

export const FlavorsPizzaRequest = async () => {
	return new Promise(async function (resolve, reject) {
		resolve({
			available: [
				{
					name: "Tomate",
				},
				{
					name: "Ervilha",
				},
				{
					name: "Presunto",
				},
				{
					name: "Frango",
				},
				{
					name: "Mussarela",
				},
				{
					name: "Peperoni",
				},
				{
					name: "Palmito",
				},
				{
					name: "Atum",
				},
				{
					name: "Brócolis",
				},
				{
					name: "Calabresa",
				},
				{
					name: "Ovo",
				},
				{
					name: "Cebola",
				},
				{
					name: "Catupiry",
				},
			],
			selected: [
				{
					name: "Molho",
				},
				{
					name: "Queijo",
				},
			],
		});
	});
};

export const RecomendedPizzaRequest = async () => {
	return new Promise(async function (resolve, reject) {
		resolve({
			size: {
				name: "Brotinho",
				size: 4,
			},
			flavors: [
				{
					name: "Molho",
				},
				{
					name: "Queijo",
				},
				{
					name: "Tomate",
				},
				{
					name: "Ervilha",
				},
				{
					name: "Presunto",
				},
			],
			extra: {
				borda: "Sim",
				obs: "",
			},
		});
	});
};

export const PointsPizzaRequest = async () => {
	return new Promise(async function (resolve, reject) {
		resolve({ points: 50 });
	});
};
