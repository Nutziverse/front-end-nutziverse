const initialState = {
  makanan: [],
  loading: true,
  error: null,
  // allMakanan: []
}

const makananReducers = (state = initialState, action) => {
  switch (action.type) {
    // case "GET_MAKANAN_REQUEST":
    //   return {
    //     ...state,
    //   }
    // case "GET_MAKANAN_SUCCESS":
    //   return {
    //     ...state,
    //     allMakanan: action.payload,
    //     loading: false,
    //   };
    // case "GET_MAKANAN_FAILED":
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };

    case "GET_MAKANAN_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MAKANAN_BY_ID":
      return {
        ...state,
        makanan: action.makananByID,
        loading: false
      };
    case "GET_MAKANAN_BY_ID_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default makananReducers;
