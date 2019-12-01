import {combineReducers} from "redux"
import preloaderReducer from "./preloader.js"

const rootReducer = combineReducers({
	preloaded: preloaderReducer
})

export default rootReducer
