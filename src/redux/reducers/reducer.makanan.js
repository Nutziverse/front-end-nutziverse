const initialState = {
	makanan: [],
	loading: true,
	error: null,
};

const makananReducers = (state = initialState, action) => {
	switch (action.type) {
		case "GET_MAKANAN_REQUEST":
			return {
				...state,
			};
		case "GET_MAKANAN_SUCCESS":
			return {
				...state,
				makanan: action.payload,
				loading: false,
			};
		case "GET_MAKANAN_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case "GET_ALL_MAKANAN":
			return {
				...state,
				makanan: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default makananReducers;
