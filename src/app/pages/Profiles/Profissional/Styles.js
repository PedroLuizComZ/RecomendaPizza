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
		bottom: 0;
	}

	.cont-container {
		display: flex;
		justify-content: space-evenly;
		margin-top: 30px;
		align-items: center;
	}

	.cont-buttom {
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cont-label {
		color: #f3983b;
		font-size: 110px;
		position: relative;
		top: -6px;
		cursor: pointer;
	}

	.cont-label-plus {
		color: #f3983b;
		font-size: 100px;
		position: relative;
		top: -3px;
		cursor: pointer;
	}

	.button-container {
		display: flex;
		justify-content: space-around;
	}

	.years-number {
		font-size: 55px;
		color: #ffffff;
	}

	.partner-container {
		background-color: rgba(255, 255, 255, 0.12);
		display: flex;
		align-items: center;
		margin-bottom: 4px;
		padding-right: 14px;
	}

	.partner-label {
		flex: 1;
		padding: 6px 14px;
		font-size: 22px;
		color: #ffffff;
	}

	.MuiMobileStepper-root {
		position: relative;
		top: 25px;
	}

	.loader__position {
		margin-top: unset;
	}

	.lds-ring {
		height: 28px;
	}

	.lds-ring div {
		left: 10px;
		top: -12px;
		width: 40px;
		height: 40px;
	}

	.MuiSwitch-switchBase {
		color: #ffffff !important;
		position: absolute;
		top: -5px;
	}

	.MuiSwitch-thumb {
		width: 30px !important;
		height: 30px !important;
	}

	.MuiSwitch-root {
		width: 73px !important;
	}

	.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
		background-color: #99ff23 !important;
	}

	.end-container {
		transform: none;
		transition: transform 0ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		width: 100%;
		height: 100%;
		background: #ffffff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		overflow: auto;
		padding-top: 112px;
	}

	.sucess-icon {
		display: flex;
		justify-content: center;
	}

	p.sucess-label {
		color: rgb(1, 118, 38);
		justify-content: center;
		font-size: 20px;
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
