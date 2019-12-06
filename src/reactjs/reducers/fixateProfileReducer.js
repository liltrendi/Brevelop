const initialState = false

const fixateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIXATE":
      state = true
      return state
    case "UNFIXATE":
      state = false
      return state
    default:
      return initialState
  }
}

export default fixateProfileReducer
