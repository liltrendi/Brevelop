const handleTweetValue = value => {
  return {
    type: "UPDATE_TWEET_VALUE",
    payload: value
  }
}

export default handleTweetValue
