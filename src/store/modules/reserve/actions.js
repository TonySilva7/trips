// action para ser disparada por um componente
export function addReserveRequest(id) {
	return {
		type: 'ADD_RESERVE_REQUEST',
		id: id,
	};
}

//action p/ ser disparada por um redux-saga
export function addReserveSuccess(trip) {
	return {
		type: 'ADD_RESERVE_SUCCESS',
		trip: trip,
	};
}

export function removeReserve(id) {
	return {
		type: 'REMOVE_RESERVE',
		id: id,
	};
}

export function updateAmountRequest(id, amount) {
	return {
		type: 'UPDATE_RESERVE_REQUEST',
		id: id,
		amount: amount,
	};
}

export function updateAmountSuccess(id, amount) {
	return {
		type: 'UPDATE_RESERVE_SUCCESS',
		id: id,
		amount: amount,
	};
}
