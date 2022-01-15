const initialState = {
	loading: true,
	error: null,
  resepID: {}
};

const ResepIDReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_RESEP_BY_ID_REQUEST":
			return {
				...state,
			};
		case "GET_RESEP_BY_ID_SUCCESS":
			return {
				...state,
				resepID: action.payload,
				loading: false,
			};
		case "GET_RESEP_BY_ID_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default ResepIDReducer;
