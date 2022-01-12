export const TambahPorsi = (ID) => {
	return (dispatch) => {
		dispatch({
			type: "TAMBAH_PORSI",
			payload: ID,
		});
	};
};

export const KurangiPorsi = (ID) => {
	return (dispatch) => {
		dispatch({
			type: "KURANGI_PORSI",
			payload: ID,
		});
	};
};
