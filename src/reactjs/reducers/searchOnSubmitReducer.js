const searchOnSubmitReducer = (state = "", action) => {
  switch (action.type) {
    case "SUBMIT":
      state = action.payload
      return state
    default:
      return state
  }
}

export default searchOnSubmitReducer
