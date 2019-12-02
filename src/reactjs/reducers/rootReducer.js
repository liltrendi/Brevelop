import { combineReducers } from "redux"
import preloaderReducer from "./preloaderReducer"
import searchOnChangeReducer from "./searchOnChangeReducer"
import searchOnSubmitReducer from "./searchOnSubmitReducer"

const rootReducer = combineReducers({
  preloaded: preloaderReducer,
  searchText: searchOnChangeReducer,
  submitText: searchOnSubmitReducer
})

export default rootReducer
