import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: #ffffff;
	z-index: 50;
	position: relative;
	flex-direction: column;
	position: relative;
	z-index: 1;
	padding: 0 20px;

	@media (min-width: 991px) {
		height: calc(100vh - 112px);
	}

	.main-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		img {
			width: 50px;
			height: 50px;
		}
	}

	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 165px;
	}

	.risc {
		width: 75px;
		background: #5e5e5e;
		height: 8px;
		position: relative;
		top: -20px;
	}

	span {
		text-align: center;
		line-height: 1.3;
		color: #5e5e5e;
	}

	.image-background {
		display: flex;
		background: #5e5e5e;
		margin-bottom: 16px;
		width: 75px;
		height: 75px;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.img-except {
		position: relative;
		left: 6px;
	}
`;
