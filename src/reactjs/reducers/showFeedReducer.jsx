const showFeedReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_FEED":
      state = true
      return state
    case "HIDE_FEED":
      state = false
      return state
    default:
      return state
  }
}

export default showFeedReducer
