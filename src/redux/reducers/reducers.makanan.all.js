const initialState = {
	makanan: [],
	loading: true,
	error: null,
};

const makananallReducers = (state = initialState, action) => {
	switch (action.type) {
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

export default makananallReducers;
