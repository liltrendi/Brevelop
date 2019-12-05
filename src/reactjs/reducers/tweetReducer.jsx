const initialState = []

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TWEET":
      if (action.payload === false) {
        return initialState
      } else {
        return [...state, action.payload]
      }
    default:
      return state
  }
}

export default tweetReducer
