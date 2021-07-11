import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addReserveSuccess, updateAmountSuccess } from './actions';
import history from '../../../services/history';

function* addToReserve({ id }) {
	const tripExists = yield select((state) =>
		state.reserve.find((trip) => trip.id === id)
	);

	const myStock = yield call(api.get, `/stock/${id}`);
	const stockAmount = myStock.data.amount;

	const currentStock = tripExists ? tripExists.amount : 0;
	const amount = currentStock + 1;

	if (amount > stockAmount) {
		alert('Quantidade máxima excedida');
		return;
	}

	if (tripExists) {
		// aumentar o amount
		const amount = tripExists.amount + 1;
		// dispara action para reducer
		yield put(updateAmountSuccess(id, amount));
	} else {
		// faz a requisição api
		const response = yield call(api.get, `trips/${id}`);
		// prepara dados para atualizar estados do reducer
		const data = {
			...response.data,
			amount: 1,
		};

		// dispara uma action para reducer
		yield put(addReserveSuccess(data));
		history.push("/bookings");
	}
}

function* updateAmount({ id, amount }) {
	if (amount <= 0) {
		return;
	}

	const myStock = yield call(api.get, `/stock/${id}`);
	const stockAmount = myStock.data.amount;

	if (amount > stockAmount) {
		alert('Quantidade máxima excedida');
		return;
	}

	yield put(updateAmountSuccess(id, amount));
}

// seta um listener para actions disparadas pelos componentes e chama a generator function
export default all([
	takeLatest('ADD_RESERVE_REQUEST', addToReserve),
	takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
]);
