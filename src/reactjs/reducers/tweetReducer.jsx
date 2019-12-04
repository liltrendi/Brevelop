const initialState = []

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TWEET":
      return [...state, action.payload]
    default:
      return state
  }
}

export default tweetReducer
