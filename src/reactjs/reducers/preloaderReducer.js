const preloaderReducer = (state = false, action) => {
  switch (action.type) {
    case "HIDE_PRELOADER":
      return !state
    default:
      return state
  }
}

export default preloaderReducer
