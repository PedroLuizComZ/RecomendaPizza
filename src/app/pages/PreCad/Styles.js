import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 15px 45px;
	border-radius: 8px;
	height: calc(100vh - 185px);
	max-width: ${process.env.REACT_APP_APP_SIZE};
	margin: 12px auto;

	h1 {
		padding-bottom: 50px;
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

	button {
		span {
			display: flex;
			align-items: center;
		}
	}

	footer {
		position: fixed;
		bottom: 8%;
		left: 0;
		width: 100%;
	}

	.error-message {
		background: darkred;
		padding: 5px 35px;
		border-radius: 10px;
		text-align: center;
	}

	header {
		text-align: center;
	}
`;
