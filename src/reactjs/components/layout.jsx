import React from "react"
import { useSelector, useDispatch } from "react-redux"
import showFeed from "../actions/showFeed"
import hideFeed from "../actions/hideFeed"
import { Fade } from "react-reveal"
import NavBar from "./navbar"
import Feed from "./feed"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/beforeSearch.css"

const Layout = () => {
  let submittedText = useSelector(state => state.submitText),
    dispatch = useDispatch()
  if (submittedText.length > 0) {
    dispatch(showFeed())
  } else {
    dispatch(hideFeed())
  }
  return (
    <Fade duration={1500} clear>
      <NavBar />
      <Feed />
    </Fade>
  )
}

export default Layout
