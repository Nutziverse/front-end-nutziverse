import axios from "axios";
import { getCookie } from "../../helpers";
const API_URL = process.env.REACT_APP_API_URL;

export const Post_data_to_history = (makanan, kalori, karbon) => {
	return async (dispatch) => {
		dispatch({
			type: "POST_DATA_REQUEST",
		});

		try {
			const token = getCookie("token");
			const body = {
				makanan: makanan,
				totKalori: Number(kalori),
				totKarbon: Number(karbon),
			};
			const { data } = await axios.post(`${API_URL}/tracking`, body, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			localStorage.removeItem("pilih_makanan");
			dispatch({
				type: "POST_DATA_SUCCESS",
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: "POST_DATA_FAILED",
				error: error,
			});
		}
	};
};
