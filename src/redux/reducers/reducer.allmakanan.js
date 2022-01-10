const initialState = {
  loading: true,
  error: null,
  allMakanan: []
}

const allmakananReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MAKANAN_REQUEST":
      return {
        ...state,
      }
    case "GET_MAKANAN_SUCCESS":
      return {
        ...state,
        allMakanan: action.payload,
        loading: false,
      };
    case "GET_MAKANAN_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default allmakananReducer;
