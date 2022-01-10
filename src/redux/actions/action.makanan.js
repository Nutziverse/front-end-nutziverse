import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const getMakananByID = (ID) => {
	return async (dispatch) => {
		dispatch({
			type: "GET_MAKANAN_REQUEST",
		});

		try {
			const { data } = await axios.get(`${API_URL}/food/${ID}`);
			dispatch({
				type: "GET_MAKANAN_SUCCESS",
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: "GET_MAKANAN_FAILED",
				error: error,
			});
		}
	};
};
