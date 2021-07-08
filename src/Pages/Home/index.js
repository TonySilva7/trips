import React, { useEffect, useState } from 'react';
import { MdFlightTakeoff as Flight } from 'react-icons/md';
import api from '../../services/api';
import { Box } from './styles';

export default function Home() {
	const [trips, setTrips] = useState([]);

	useEffect(() => {
		async function loadApi(params) {
			const response = await api.get('trips');
			setTrips(response.data);
		}

		loadApi();
	}, []);

	return (
		<Box>
			{trips.map((trip) => (
				<li key={trip.id}>
					<img src={trip.image} alt={trip.title} />
					<strong>{trip.title}</strong>
					<span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

					<button type='button' onClick={() => {}}>
						<div>
							<Flight size={16} color='#FFF' />
						</div>
						<span>Solicitar Reserva</span>
					</button>
				</li>
			))}
		</Box>
	);
}
