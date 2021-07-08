import styled from 'styled-components';

export const Container = styled.div`
	& > footer > button {
		display: flex;
		padding: 10px;
		text-transform: uppercase;
		border-radius: 4px;
		margin-top: 10px;
		font-weight: bold;
	}
`;

export const Title = styled.h1`
	color: #fff;
`;

export const BookingCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	margin-bottom: 20px;
	background: #fff;
	border-radius: 4px;

	img {
		height: 100px;
	}

	button {
		background: #fff;
	}
`;
