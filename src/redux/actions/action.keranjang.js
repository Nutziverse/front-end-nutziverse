import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const getKeranjang = (ID) => {
	return async (dispatch) => {
		dispatch({
			type: "GET_DATA_REQUEST",
		});

		try {
			const body = {
				idmakanan: ID,
			};
			const data = await axios.post(`${API_URL}/food/all`, body);
			dispatch({
				type: "GET_DATA_SUCCESS",
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: "GET_DATA_FAILED",
				error: error,
			});
		}
	};
};
