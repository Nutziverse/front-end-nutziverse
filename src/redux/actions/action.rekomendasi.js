import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const getRekomendasi = () => {
	return async (dispatch) => {
		dispatch({
			type: "GET_REKOMENDASI_REQUEST",
		});

		try {
			const { data } = await axios.get(`${API_URL}/rekomendasi`);
			dispatch({
				type: "GET_REKOMENDASI_SUCCESS",
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: "GET_REOMENDASI_FAILED",
				error: error,
			});
		}
	};
};
