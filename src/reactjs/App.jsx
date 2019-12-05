import React from "react"
import { useSelector, useDispatch } from "react-redux"
import hidePreloader from "./actions/hidePreloader"
import MainLoader from "./components/mainLoader"
import Layout from "./components/layout"

const App = () => {
  let loaded = useSelector(state => state.preloaded)
  let dispatch = useDispatch()
  !loaded &&
    setTimeout(() => {
      dispatch(hidePreloader())
    }, 7000)
  return loaded ? <Layout /> : <MainLoader />
}

export default App
