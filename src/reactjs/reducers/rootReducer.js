import { combineReducers } from "redux"
import preloaderReducer from "./preloaderReducer"
import searchOnChangeReducer from "./searchOnChangeReducer"
import searchOnSubmitReducer from "./searchOnSubmitReducer"
import tweetReducer from "./tweetReducer"
import showFeedReducer from "./showFeedReducer"
import streamStartedReducer from "./streamStartedReducer"
import updateTweetValueReducer from "./updateTweetValueReducer"
import fixateProfileReducer from "./fixateProfileReducer"

const rootReducer = combineReducers({
  preloaded: preloaderReducer,
  searchText: searchOnChangeReducer,
  submitText: searchOnSubmitReducer,
  streamStarted: streamStartedReducer,
  showFeed: showFeedReducer,
  fixateProfile: fixateProfileReducer,
  tweetValue: updateTweetValueReducer,
  tweetCollection: tweetReducer
})

export default rootReducer
