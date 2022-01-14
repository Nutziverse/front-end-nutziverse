const initialState = {
	loading: true,
	error: null,
	allRekomendasi: [],
};

const rekomendasiReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_REKOMENDASI_REQUEST":
			return {
				...state,
			};
		case "GET_REKOMENDASI_SUCCESS":
			return {
				...state,
				allRekomendasi: action.payload,
				loading: false,
			};
		case "GET_REKOMENDASI_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default rekomendasiReducer;
