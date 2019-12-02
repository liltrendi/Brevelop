import React from "react"
import { useSelector } from "react-redux"
import { Fade } from "react-reveal"
import NavBar from "./navbar"
import Guide from "./guide"
import "../styles/beforeSearch.css"

const Layout = () => {
  let submittedText = useSelector((state) => state.submitText),
    searchedText = useSelector((state) => state.searchText)
  return (
    <Fade duration={1500} clear>
      <NavBar />
      <div className="fillerDiv">
        {submittedText.length > 0 ? <h3>Show loader or feed</h3> : <Guide />}
      </div>
    </Fade>
  )
}

export default Layout
