import React from 'react';
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeReserve,
	updateAmountRequest,
} from '../../store/modules/reserve/actions';
import { BookingCont, Container, Title } from './styles';

export default function Booking() {
	const reserves = useSelector((state) => state.reserve);
	const dispatch = useDispatch();

	function handleRemove(id) {
		dispatch(removeReserve(id));
	}

	function incrementAmount(trip) {
		dispatch(updateAmountRequest(trip.id, trip.amount + 1));
	}

	function decrementAmount(trip) {
		dispatch(updateAmountRequest(trip.id, trip.amount - 1));
	}

	return (
		<Container>
			<Title>Você solicitou {reserves.length} reserva</Title>
			{reserves.map((reserve) => (
				<BookingCont key={reserve.id}>
					<img src={reserve.image} alt={reserve.title} />
					<strong>{reserve.title}</strong>

					<div>
						<button type='button' onClick={() => decrementAmount(reserve)}>
							<MdRemoveCircle size={25} />
						</button>

						<input type='text' value={reserve.amount} readOnly />

						<button type='button' onClick={() => incrementAmount(reserve)}>
							<MdAddCircle size={25} />
						</button>
					</div>

					<button type='button' onClick={() => handleRemove(reserve.id)}>
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
