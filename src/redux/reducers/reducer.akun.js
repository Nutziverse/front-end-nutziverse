const initialState = {
  akun: null,
  loading: true,
  error: null
}

const akunReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AKUN_REQUEST":
      return {
        ...state
      }

    case "GET_AKUN_SUCCESS":
      return{
        ...state,
        akun: action.payload,
        loading: false
      }
    
    case "GET_AKUN_FAILED":
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}

export default akunReducers