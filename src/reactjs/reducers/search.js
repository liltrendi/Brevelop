const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "KEYSTROKE":
      state = action.payload
      return state
    default:
      return state
  }
}

export default searchReducer
