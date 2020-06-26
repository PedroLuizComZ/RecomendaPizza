import styled from "styled-components";

export const Container = styled.div`
	height: calc(100vh - 125px);
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		padding: 25px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		width: 320px;

		img {
			width: 180px;
		}

		input {
			width: 100%;
			padding: 12px;
			font-size: 20px;
			margin-bottom: 16px;
			height: 30px;
		}

		button {
			width: 50%;
			margin-top: 12px;
			margin-bottom: 16px;
		}

		a {
			color: #ffffff !important;
		}

		.MuiDialogContentText-root {
			font-size: 18px;
		}
	}

	.ios-message {
		width: 90%;
		left: auto;
		bottom: 15px;
		background: #fff;
		z-index: 10;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		padding-bottom: 0;
		border-radius: 0;

		img {
			width: 50px;
		}

		p {
			text-align: left;
			color: #144668;
			margin: 0;
			z-index: 15;
		}

		section {
			display: flex;
			align-items: center;
			padding: 0 15px;
		}

		div {
			border-radius: 0;
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

		.times-image {
			position: absolute;
			top: 5px;
			right: 10px;
			width: 15px;
		}
	}

	.error-message {
		background: darkred;
		padding: 5px 35px;
		border-radius: 10px;
		text-align: center;
	}

	.mb-10 {
		margin-bottom: 10px;
	}

	.reset-btn {
		padding: unset;
	}
`;
