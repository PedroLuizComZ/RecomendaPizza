import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Toolbar from "./app/components/Toolbar/Toolbar";

//Paginas
import Home from "./app/pages/Home/Index";
import SizePizza from "./app/pages/SizePizza/Index";
import FlavorPizza from "./app/pages/FlavorPizza/Index";
import ExtraPizza from "./app/pages/ExtraPizza/Index";
import Summary from "./app/pages/Summary/Index";
import NotFound from "./app/pages/NotFound/Index";

function Routes(props) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {}, []);

	return (
		<Router style={{ height: "100%" }}>
			<Toolbar />
			<Switch>
				{/* paginas */}
				<Route
					exact
					path="/"
					component={(props) => <Home {...props} />}
				/>

				<Route
					exact
					path="/tamanho-pizza"
					component={(props) => <SizePizza {...props} />}
				/>

				<Route
					exact
					path="/sabor-pizza"
					component={(props) => <FlavorPizza {...props} />}
				/>

				<Route
					exact
					path="/extra-pizza"
					component={(props) => <ExtraPizza {...props} />}
				/>

				<Route
					exact
					path="/resumo-pizza"
					component={(props) => <Summary {...props} />}
				/>

				{/* Pagina não encontrada */}
				<Route component={(props) => <NotFound {...props} />} />
			</Switch>
		</Router>
	);
}

export default Routes;
