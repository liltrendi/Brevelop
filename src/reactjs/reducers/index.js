import { combineReducers } from "redux"
import preloaderReducer from "./preloader"
import searchReducer from "./search"

const rootReducer = combineReducers({
  preloaded: preloaderReducer,
  searchText: searchReducer
})

export default rootReducer
