const initialState = {
  tracking: null,
  loading: true,
  error: null
}

const trackingReducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_TRACKING_REQUEST":
      return {
        ...state,
        loading: true
      }
    case "GET_TRACKING_SUCCESS":
      return {
        ...state,
        tracking: action.payload,
        loading: false
      }
    case "GET_TRACKING_FAILED":
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}

export default trackingReducer