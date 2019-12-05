const addTweetToState = feed => {
  return {
    type: "GET_TWEET",
    payload: feed
  }
}

export default addTweetToState
