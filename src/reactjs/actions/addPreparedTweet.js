const addPreparedTweet = tweet => {
  return {
    type: "TWEET_PREPARED",
    payload: tweet
  }
}

export default addPreparedTweet
