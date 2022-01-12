const initialState = {
	loading: true,
	error: null,
	keranjang: [],
};

const keranjangReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_DATA_REQUEST":
			console.log(action);
			return {
				...state,
			};
		case "GET_DATA_SUCCESS":
			console.log(action);
			return {
				...state,
				keranjang: action.payload,
				loading: false,
			};
		case "GET_DATA_FAILED":
			console.log(action);
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
