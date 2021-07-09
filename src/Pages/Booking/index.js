import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { BookingCont, Container, Title } from './styles';

export default function Booking() {
	const reserves = useSelector((state) => state.reserve);
	return (
		<Container>
			<Title>Você solicitou {reserves.length} reserva</Title>
			{reserves.map((reserve) => (
				<BookingCont key={reserve.id}>
					<img src={reserve.image} alt={reserve.title} />
					<strong>{reserve.title}</strong>
					<span>Quantidade: {reserve.amount}</span>

					<button type='button' onClick={() => {}}>
						<MdDelete size={20} color='#191919' />
					</button>
				</BookingCont>
			))}

			<footer>
				<button type='button'>Solicitar Reservas</button>
			</footer>
		</Container>
	);
}
