import React from "react"
import { useSelector } from "react-redux"
import { Fade } from "react-reveal"
import NavBar from "./navbar"
import Guide from "./guide"
import Feed from "./feed"
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
        {submittedText.length > 0 ? <Feed /> : <Guide />}
      </div>
    </Fade>
  )
}

export default Layout
