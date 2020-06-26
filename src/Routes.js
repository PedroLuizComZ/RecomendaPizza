import React, { useEffect, useState } from "react";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Toolbar from "./app/components/toolbar/Toolbar";
import Loader from "./app/components/loader/Loader";

//Paginas
import PreCad from "./app/pages/PreCad/Index";
import PreCadMessage from "./app/pages/PreCad/Message";
import FirstAccess from "./app/pages/FirstAccess/Index";
import Welcome from "./app/pages/Welcome/Index";
import Login from "./app/pages/Login/Index";
import Reset from "./app/pages/Login/Reset";
import MessagePassword from "./app/pages/Login/Message";
import ResetPassword from "./app/pages/ResetPassword/Index";
import Home from "./app/pages/Home/Index";
import Error from "./app/pages/Error/Index";
import NotFound from "./app/pages/NotFound/Index";
import Progress from "./app/pages/Progress/Index";
import First from "./app/pages/First/Index";
import Third from "./app/pages/Third/Index";
import Indication from "./app/pages/Indication/Index";
import VideoGallery from "./app/pages/VideoGallery/Index";
import VideoToa from "./app/pages/VideoToa/Index";
import NoticesHub from "./app/pages/NoticesHub/Index";
import Faq from "./app/pages/Faq/Index";
import Notices from "./app/pages/Notices/Index";
import Notice from "./app/pages/Notices/Detail";
import CookiesTerms from "./app/pages/CookiesTerms/Index";
import PrivacyPolicy from "./app/pages/PrivacyPolicy/Index";
import TermOfUse from "./app/pages/TermOfUse/Index";
import Trails from "./app/pages/Ead/Trails";
import Trail from "./app/pages/Ead/Trail";
import Content from "./app/pages/Ead/Content";
import Simulator from "./app/pages/Ead/Simulator";
import AcceptContract from "./app/pages/AcceptContract/Index";
import CompleteMenu from "./app/pages/CompleteMenu/Index";

//Controllers
import { AuthController } from "./app/controllers/UserController";

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
					component={(props) => <First {...props} />}
				/>

				{/* Pagina não encontrada */}
				<Route component={(props) => <NotFound {...props} />} />
			</Switch>
		</Router>
	);
}

export default Routes;
