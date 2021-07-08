import styled from 'styled-components';

export const Box = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	list-style: none;

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 4px;
		padding: 13px;

		img {
			max-width: 300px;
			max-height: 280px;
			border-radius: 4px;
		}

		strong {
			font-size: 16px;
			text-align: center;
			line-height: 20px;
			color: #191919;
			margin-top: 20px;
		}

		& > span {
			margin-bottom: 10px;
		}

		button {
			display: flex;
			align-items: center;
			justify-content: baseline;
			margin-top: auto;
			color: #fff;
			background-color: #191919;
			border-radius: 4px;

			div {
				display: flex;
				align-items: center;
				padding: 10px;
			}
		}
	}
`;
