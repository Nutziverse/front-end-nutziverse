export let initialState =
	JSON.parse(localStorage.getItem("pilih_makanan")) || [];

const PorsiReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TAMBAH_PORSI":
			const data = {
				makananID: action.payload,
				porsi: 1,
			};
			let index = state.findIndex((el) => el.makananID === action.payload);
			if (index > -1) {
				state[index].porsi += 1;
			} else {
				state.push(data);
			}
			localStorage.setItem("pilih_makanan", JSON.stringify(state));
			return [...state];
		case "KURANGI_PORSI":
			let index1 = state.findIndex((el) => el.makananID === action.payload);
			if (index1 > -1) {
				if (state[index1].porsi > 1) {
					state[index1].porsi -= 1;
					localStorage.setItem("pilih_makanan", JSON.stringify(state));
				} else {
					let remove = state.splice(index1, 1);
					localStorage.setItem("pilih_makanan", JSON.stringify(state));
				}
			}
			return [...state];
		case "GET_PORSI":
			return [...state];
		case "DELETE_PORSI":
			localStorage.removeItem("pilih-makanan");
			return [...state];
		default:
			return state;
	}
};

export default PorsiReducer;
