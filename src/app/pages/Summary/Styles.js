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
		color #FFFFFF !important;
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

	tr{
		background: rgba(255,255,255,0.12);
	}

	td{
		padding: 4px 20px;
	}

	th{
		font-weight: normal;
	}

	footer {
		bottom: 0;
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

	.min-width-column {
		min-width: 56px;
	}

	div.MuiAutocomplete-tag{
		background: #f3983b;
		color: #15125c;
	}

	div.MuiAutocomplete-root{
    background: #15125c;
	}

	table{
		color:#FFFFFF
	}

	.MuiSwitch-switchBase {
		color: #FFFFFF !important;
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

	.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track{
		background-color: #99ff23 !important;
	}

	.error-message {
		background: darkred;
		padding: 5px 35px;
		border-radius: 10px;
		text-align: center;
	}
`;
