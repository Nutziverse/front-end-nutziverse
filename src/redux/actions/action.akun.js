import axios from "axios"
import { getCookie } from "../../helpers"
const {REACT_APP_API_URL} = process.env


export const getAkun = () => {
  return async dispatch => {
    dispatch({
      type: "GET_AKUN_REQUEST"
    })
    
    try {
      const token = getCookie("token")
      const auth = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await axios.get(`${REACT_APP_API_URL}/akun`, auth)
      dispatch({
        type: "GET_AKUN_SUCCESS",
        payload: data
      })
    } catch (err) {
      dispatch({
        type: "GET_AKUN_FAILED",
        error: err
      })
    }
  }
}