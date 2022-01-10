import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
export const getMakanan = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${API_URL}/food/`);
			dispatch({
				type: "GET_ALL_MAKANAN",
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
