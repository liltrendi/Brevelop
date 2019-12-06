const preparedTweetReducer = (state = [], action) => {
  switch (action.type) {
    case "TWEET_PREPARED":
      return [...state, action.payload]
    default:
      return state
  }
}

export default preparedTweetReducer
