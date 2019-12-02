const searchOnSubmitReducer = (state = "", action) => {
  switch (action.type) {
    case "SUBMIT":
      return action.payload
    default:
      return ""
  }
}

export default searchOnSubmitReducer
