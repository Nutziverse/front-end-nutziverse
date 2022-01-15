const initialState = {
	resep: [],
	loading: true,
	error: null
};

const ResepReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_RESEP_REQUEST":
			return {
				...state,
			};
		case "GET_RESEP_SUCCESS":
			return {
				...state,
				resep: action.payload,
				loading: false,
			};
		case "GET_RESEP_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default ResepReducer;
