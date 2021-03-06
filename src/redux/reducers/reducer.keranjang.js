const initialState = {
	loading: true,
	error: null,
	keranjang: [],
};

const keranjangReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_DATA_REQUEST":
			return {
				...state,
			};
		case "GET_DATA_SUCCESS":
			return {
				...state,
				keranjang: action.payload,
				loading: false,
			};
		case "GET_DATA_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default keranjangReducer;
