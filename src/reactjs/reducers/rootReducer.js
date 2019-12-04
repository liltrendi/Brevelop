import { combineReducers } from "redux"
import preloaderReducer from "./preloaderReducer"
import searchOnChangeReducer from "./searchOnChangeReducer"
import searchOnSubmitReducer from "./searchOnSubmitReducer"
import tweetReducer from "./tweetReducer"

const rootReducer = combineReducers({
  preloaded: preloaderReducer,
  searchText: searchOnChangeReducer,
  submitText: searchOnSubmitReducer,
  tweetCollection: tweetReducer
})

export default rootReducer
