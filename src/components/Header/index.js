import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Container } from './styles';

export default function Header() {
	const myStateRedux = useSelector((state) => state.reserve);
	// console.log(reserveSize);

	return (
		<Container>
			<Link to='/'>
				<Logo alt='Logotipo da empresa' />
			</Link>

			<Link to='/bookings'>
				<div>
					<strong>Minhas Reservas</strong>
					<span>{myStateRedux.length} Reservas</span>
				</div>
			</Link>
		</Container>
	);
}
