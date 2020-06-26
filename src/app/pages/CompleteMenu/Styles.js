import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 20px;
	padding-top: 0px !important;
	border-radius: 8px;
	max-width: 750px;
	height: calc(100vh - 152px);
	max-width: ${process.env.REACT_APP_APP_SIZE};
	margin: 0 auto;

	.home-group {
		width: 100%;

		.MuiGrid-align-items-xs-center {
			align-items: flex-start !important;
		}
	}

	.multi-input {
		display: flex !important;

		div {
			width: 50%;
		}
	}

	.label-container {
		display: grid;
	}

	.input-width {
		width: 90% !important;
	}

	.ad2hs-prompt {
		position: fixed;
		bottom: 0;
		background: white;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.ad2hs-prompt p {
		color: #164c6c;
		margin: 0;
		padding: 16px;
		width: 100%;
		text-align: left;
	}

	.prompt-img {
		z-index: 100;
		width: 24px;
		padding: 17px;
		cursor: pointer;
		position: fixed;
		bottom: 0;
		right: 0;
	}

	button {
		span {
			display: flex;
			align-items: center;
		}
	}

	footer {
		margin-top: 35px;
		margin-bottom: 24px;
		width: 100%;
	}

	p {
		margin-top: 0;
		display: flex;
		font-size: 20px;
		line-height: 1.5;
	}

	.alert-icon {
		position: absolute;
		color: #f9963a !important;
		right: 4px;
		top: 0px;
	}

	.MuiAvatar-colorDefault {
		background-color: white !important;
		svg {
			color: #154669;
		}
	}

	.avatar-alt {
		background-color: unset !important;
		svg {
			color: #ffffff;
		}
	}

	.scribble-bottom-home {
		position: fixed;
		bottom: -10px;
		right: 0;
		width: auto;
		height: auto;
	}

	.ios-message {
		width: 90%;
		left: auto;
		bottom: 15px;
		background: #fff;
		z-index: 80;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		padding-bottom: 0;

		img {
			width: 50px;
		}

		.img-logo {
			position: relative;
			left: -8px;
		}

		p {
			text-align: left;
			color: #144668;
			margin: 0;
			z-index: 15;
			font-size: 14px;
		}

		section {
			display: flex;
			align-items: center;
			padding: 0 15px;
		}

		.times-image {
			position: absolute;
			top: 5px;
			right: 10px;
			width: 15px;
		}

		div {
			width: 50px;
			height: 20px;
			background: white;
			position: relative;
			z-index: 10;
			-ms-transform: rotate(-90deg);
			-webkit-transform: rotate(-90deg);
			transform: rotate(-45deg);
			left: 8px;
		}
	}

	.check-icon {
		position: absolute;
		width: 40px;
		right: 0px;
		bottom: 10px;
	}

	.check-icon-alert {
		position: absolute;
		width: 35px;
		right: 7px;
		bottom: 10px;
	}
`;
