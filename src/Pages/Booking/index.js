import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BookingCont, Container, Title } from './styles';

export default function Booking() {
	return (
		<Container>
			<Title>Você solicitou 1 reserva</Title>
			<BookingCont>
				<img
					src='https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg'
					alt='Maceió'
				/>
				<strong>Viajem Maceió 7 Dias</strong>
				<span>Quantidade: 2</span>

				<button type='button' onClick={() => {}}>
					<MdDelete size={20} color='#191919' />
				</button>
			</BookingCont>

			<footer>
				<button type='button'>Solicitar Reservas</button>
			</footer>
		</Container>
	);
}
