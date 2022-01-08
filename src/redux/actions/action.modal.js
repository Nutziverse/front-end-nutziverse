export const showModal = (MID) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_MODAL',
      payload: MID
    })
  }
}

export const closeModal = () => {
  return dispatch => {
    dispatch({
      type: 'CLOSE_MODAL'
    })
  }
}