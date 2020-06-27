import React, { Component } from "react";

const scrollToBottomStyle = {
	cursor: "pointer",
};

export default class ScrollToBottom extends Component {
	scrollToBottom() {
		let elementSize = document
			.getElementById("who-we-are")
			.getBoundingClientRect();
		elementSize =
			window.screen.width > 991
				? elementSize.top - 100
				: elementSize.top - 56;
		window.scrollTo({
			top: elementSize,
			behavior: "smooth",
		});
	}

	render() {
		return (
			<a
				style={scrollToBottomStyle}
				className={" both-buttons"}
				onClick={() => this.scrollToBottom()}
			>
				Recomendação do Chef
			</a>
		);
	}
}
