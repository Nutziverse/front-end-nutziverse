export const TambahPorsi = () => {
	return (dispatch) => {
		dispatch({
			type: "TAMBAH_PORSI",
		});
	};
};

export const KurangiPorsi = () => {
	return (dispatch) => {
		dispatch({
			type: "KURANGI_PORSI",
		});
	};
};
