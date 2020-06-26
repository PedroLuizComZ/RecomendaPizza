import React from "react";

export default function Loader(props) {
	return (
		<div id={"loader_position"} className="loader__position">
			<div className="lds-ring">
				<div className={"loader-ring"}></div>
				<div className={"loader-ring"}></div>
				<div className={"loader-ring"}></div>
				<div className={"loader-ring"}></div>
			</div>
		</div>
	);
}
