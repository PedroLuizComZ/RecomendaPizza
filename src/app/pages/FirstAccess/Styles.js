import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 15px 45px;
	border-radius: 8px;
	height: calc(100vh - 142px);
	max-width: ${process.env.REACT_APP_APP_SIZE};
	margin: 12px auto;

	input {
		height: 38px;
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
		width: 97% !important;
	}

	button {
		span {
			display: flex;
			align-items: center;
		}
	}

	footer {
		margin-bottom: 18px;
		bottom: 16px;
		left: 0;
		width: 100%;
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

	.error-message {
		display: block;
		background: darkred;
		padding: 5px 20px;
		border-radius: 10px;
		text-align: center;
		margin: auto;
	}

	.button-container {
		display: flex;
		justify-content: space-around;
	}

	.footer-container {
		display: flex;
		justify-content: space-evenly;
	}
`;
