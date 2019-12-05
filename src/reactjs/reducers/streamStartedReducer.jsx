const streamStartedReducer = (state = false, action) => {
  switch (action.type) {
    case "STREAM_STARTED":
      state = true
      return state
    default:
      state = false
      return state
  }
}

export default streamStartedReducer
