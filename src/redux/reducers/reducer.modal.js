const initialState = {
	show: false,
	MID: "",
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			return {
				...state,
				show: true,
				MID: action.payload,
			};
		case "CLOSE_MODAL":
			return {
				...state,
				show: false,
			};
		default:
			return state;
	}
};

export default modalReducer;
