const initialState = {
	loading: true,
	error: null,
	User: [],
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USER_REQUEST":
			return {
				...state,
			};
		case "GET_USER_SUCCESS":
			return {
				...state,
				User: action.payload,
				loading: false,
			};
		case "GET_USER_FAILED":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case "LOGOUT":
			return {
				...state,
				loading: false,
				User: []
			}
		default:
			return state;
	}
};

export default UserReducer;
