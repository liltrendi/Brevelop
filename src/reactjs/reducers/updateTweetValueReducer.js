const updateTweetValueReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_TWEET_VALUE":
      state = action.payload
      return state
    default:
      return state
  }
}

export default updateTweetValueReducer
