import axios from "axios";
import { getCookie } from "../../helpers";
const API_URL = process.env.REACT_APP_API_URL;

export const getUSER = () => {
	return async (dispatch) => {
		dispatch({
			type: "GET_USER_REQUEST",
		});

		try {
			const token = getCookie("token");
			const { data } = await axios.get(`${API_URL}/profile`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			dispatch({
				type: "GET_USER_SUCCESS",
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: "GET_USER_FAILED",
				error: error,
			});
		}
	};
};

export const logout = () => {
	document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	return (dispatch) => {
		dispatch({
			type: "LOGOUT"
		})
	}
}