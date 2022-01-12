export let initialState = JSON.parse(
	localStorage.getItem("pilih_makanan") || []
);

if (state.length > 0) {
	let newData = JSON.parse(state);
	const index = newData.findIndex((el) => el.makananID === MID);
	if (index > -1) {
		newData[index].porsi += 1;
	} else {
		newData.push(data);
	}
	localStorage.setItem("pilih_makanan", JSON.stringify(newData));
} else {
	localStorage.setItem("pilih_makanan", JSON.stringify([data]));
}

const PorsiReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TAMBAH_PORSI":
			const index = state.findIndex((el) => el.makananID === action.payload);
			if (index > -1) {
				state[index].porsi += 1;
			} else {
				state.push(data);
			}
			localStorage.setItem("pilih_makanan", JSON.stringify(state));
			return state;
		case "KURANGI_PORSI":
			const index = state.findIndex((el) => el.makananID === action.payload);
			if (index > -1) {
				if (state[index].porsi > 1) {
					state[index].porsi -= 1;
					localStorage.setItem("pilih_makanan", JSON.stringify(state));
				} else {
					let remove = state.splice(index, 1);
					localStorage.setItem("pilih_makanan", JSON.stringify(state));
				}
			}
			return state;
		default:
			return state;
	}
};

export default PorsiReducer;
