import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Booking from './Pages/Booking';
import Home from './Pages/Home';

export default function MyRoutes() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/bookings' component={Booking} />
		</Switch>
	);
}
