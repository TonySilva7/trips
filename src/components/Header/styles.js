import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15px 0;
	padding: 10px 10px;
	border-bottom: solid 1px #ddd;

	a:first-child {
		display: flex;
		align-items: center;
		text-decoration: none;

		svg {
			max-width: 110px;
			max-height: 110px;
		}
	}

	& > a:last-child {
		div {
			text-align: right;
			margin-right: 10px;

			strong {
				display: block;
				color: #fff;
			}

			span {
				color: #ddd;
				font-size: 15px;
			}
		}
	}
`;
