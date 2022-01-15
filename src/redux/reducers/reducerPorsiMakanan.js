export let initialState = {
	local: [],
	loading: true,
	error: null,
};

const PorsiReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TAMBAH_PORSI":
			let local = JSON.parse(localStorage.getItem("pilih_makanan")) || [];
			const data = {
				makananID: action.payload,
				porsi: 1,
			};
			if (local.length > 0) {
				let index = local.findIndex((el) => el.makananID === action.payload);
				if (index > -1) {
					local[index].porsi += 1;
				} else {
					local.push(data);
				}
				localStorage.setItem("pilih_makanan", JSON.stringify(local));
			} else {
				localStorage.setItem("pilih_makanan", JSON.stringify([data]));
			}

			return { ...state, loading: false, local: local };
		case "KURANGI_PORSI":
			let local1 = JSON.parse(localStorage.getItem("pilih_makanan")) || [];
			let index1 = local1.findIndex((el) => el.makananID === action.payload);
			if (index1 > -1) {
				if (local1[index1].porsi > 1) {
					local1[index1].porsi -= 1;
					localStorage.setItem("pilih_makanan", JSON.stringify(local1));
				} else {
					local1.splice(index1, 1);
					localStorage.setItem("pilih_makanan", JSON.stringify(local1));
				}
			}
			return { ...state, loading: false, local: local1 };
		case "GET_PORSI":
			let local2 = JSON.parse(localStorage.getItem("pilih_makanan")) || [];
			
			return { ...state, loading: false, local: local2 };
		case "DELETE_PORSI":
			localStorage.removeItem("pilih-makanan");
			return { ...state, loading: false, local: [] };
		default:
			return state;
	}
};

export default PorsiReducer;
