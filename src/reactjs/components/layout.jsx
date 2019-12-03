import React from "react"
import { useSelector } from "react-redux"
import { Fade } from "react-reveal"
import NavBar from "./navbar"
import Guide from "./guide"
import CallToAction from "./callToAction"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/beforeSearch.css"

const Layout = () => {
  let submittedText = useSelector((state) => state.submitText)
  return (
    <Fade duration={1500} clear>
      <NavBar />
      <CallToAction />
      <div className="fillerDiv">
        {submittedText.length > 0 ? <h3>Show loader or feed</h3> : <Guide />}
      </div>
    </Fade>
  )
}

export default Layout
