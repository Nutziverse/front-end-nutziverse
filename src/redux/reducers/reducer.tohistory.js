const initialState = {
	loading: true,
	error: null,
	History: [],
};

const ToHistory = (state = initialState, action) => {
	switch (action.type) {
		case "POST_DATA_REQUEST":
			return {
				...state,
			};
		case "POST_DATA_SUCCESS":
			return {
				...state,
				History: action.payload,
				loading: false,
			};
		case "POST_DATA_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default ToHistory;
