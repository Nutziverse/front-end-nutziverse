import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getResep = () => {
  return async dispatch => {
    dispatch({
      type: "GET_RESEP_REQUEST",
    });

    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/resep`);
      dispatch({
        type: "GET_RESEP_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_RESEP_FAILED",
        error: error,
      });
    }
  };
};

export const getResepByID = (ID) => {
  return async dispatch => {
    dispatch({
      type: "GET_RESEP_BY_ID_REQUEST",
    });

    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/resep/${ID}`);
      dispatch({
        type: "GET_RESEP_BY_ID_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_RESEP_BY_ID_FAILED",
        error: error,
      });
    }
  };
};
