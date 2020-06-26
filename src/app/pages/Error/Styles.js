import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		border-radius: 8px;
		width: 300px;

		img {
			margin-bottom: 50px;
		}

		input {
			width: 80%;
			color: #005070;
			border-radius: 20px;
			padding: 12px;
			font-size: 15px;
			border: solid 1px #005070;
			margin-bottom: 16px;
		}

		input::placeholder {
			color: #005070;
		}

		a {
			color: #ffffff !important;
		}
	}
`;
