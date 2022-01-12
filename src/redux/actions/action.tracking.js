import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL
const accessToken = process.env.REACT_APP_TOKEN

export const getTracking = () => {
  return async dispatch => {
    dispatch({
      type: "GET_TRACKING_REQUEST"
    })

    try {
      const authAxios = new axios.create({
        baseURL: API_URL,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const { data } = await authAxios.get(`/tracking/today`)
      dispatch({
        type: "GET_TRACKING_SUCCESS",
        payload: data
      })
    } catch (err) {
      dispatch({
        type: "GET_TRACKING_FAILED",
        error: err
      })
    }
  }
}

export const getByDate = (date) => {
  return async dispatch => {
    dispatch({
      type: "GET_TRACKING_REQUEST"
    })
  
    try {
  
      const { data } = await axios.get(`${API_URL}/tracking/${date}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      dispatch({
        type: "GET_TRACKING_SUCCESS",
        payload: data
      })
    } catch (err) {
      dispatch({
        type: "GET_TRACKING_FAILED",
        error: err
      })
    }
  }
}