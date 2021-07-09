import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addReserveSuccess, updateAmountReserve } from './actions';

function* addToReserve({ id }) {
	const tripExists = yield select((state) =>
		state.reserve.find((trip) => trip.id === id)
	);

	if (tripExists) {
		// aumentar o amount
		const amount = tripExists.amount + 1;
		// dispara action para reducer
		yield put(updateAmountReserve(id, amount));
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
	}
}

// seta um listener para actions disparadas pelos componentes e chama a generator function
export default all([takeLatest('ADD_RESERVE_REQUEST', addToReserve)]);
