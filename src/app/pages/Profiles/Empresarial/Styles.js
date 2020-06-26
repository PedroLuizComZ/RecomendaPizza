import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0 50px;
	border-radius: 8px;
	max-width: ${process.env.REACT_APP_APP_SIZE};
	margin: auto;

	.MuiInputBase-input {
		width: auto !important;
	}

	svg.MuiSvgIcon-root {
		color: #000000 !important;
		width: 1em;
		height: 1em;
	}

	.MuiAutocomplete-root > .MuiFormControl-root {
		width: 100%;
	}

	.MuiMobileStepper-dot:last-child {
		background: rgba(0, 0, 0, 0.26);
	}

	.table-container {
		display: flex;
		justify-content: center;
	}

	footer {
		margin-top: 65px;
		margin-bottom: 0;
		bottom: 0;
	}

	.button-container {
		display: flex;
		justify-content: space-around;
	}

	.end-container {
		transform: none;
		transition: transform 0ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		width: 100vw;
		height: 100vh;
		background: #ffffff;
		position: fixed;
		top: 0;
		z-index: 100;
		overflow: auto;
	}

	.sucess-icon {
		display: flex;
		justify-content: center;
	}

	p.sucess-label {
		color: rgb(1, 118, 38);
		justify-content: center;
		font-size: 28px;
		margin-bottom: 0;
		padding: 0px 35px;
	}

	.exit-button {
		background: #57d2d9;
		border: navajowhite;
		padding: 8px 20px;
		border-radius: 25px;
		font-size: 18px;
	}

	.exit-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 12px;
	}

	small {
		margin: 4px;
	}

	.spacer {
		margin-bottom: 12px;
	}

	.error-message {
		background: darkred;
		padding: 5px 35px;
		border-radius: 10px;
		text-align: center;
	}
`;
