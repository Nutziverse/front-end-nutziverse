import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

export const getTracking = () => {
  return async dispatch => {
    dispatch({
      type: "GET_TRACKING_REQUEST"
    })

    try {
      // accesstoken, later update with get from cookies
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxZDE1ZmJjYjI2NjQyNmU4YzFhY2FmYyIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTY0MTc5OTY0MiwiZXhwIjoxNjQxODAzMjQyfQ.bPaKhyi3jf21ZqeVU33KZ3qee4ujn1m8AQOMT2sr0dI"

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