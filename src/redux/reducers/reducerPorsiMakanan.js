export let initialState = {
	number: 1,
};

const PorsiReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TAMBAH_PORSI":
			let test = {
				...state,
				number: state.number + 1,
			};
			console.log(initialState);
			return {
				...state,
				number: state.number + 1,
			};
		case "KURANGI_PORSI":
			return {
				...state,
				number: 11,
			};
		default:
			return state;
	}
};

export default PorsiReducer;
