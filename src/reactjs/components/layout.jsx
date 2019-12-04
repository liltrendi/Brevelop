import React from "react"
import { useSelector } from "react-redux"
import { Fade } from "react-reveal"
import NavBar from "./navbar"
import Feed from "./feed"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/beforeSearch.css"

const Layout = () => {
  let submittedText = useSelector((state) => state.submitText)
  return (
    <Fade duration={1500} clear>
      <NavBar />
      <Feed />
    </Fade>
  )
}

export default Layout

/*
import Guide from "./guide"
import CallToAction from "./callToAction"
<CallToAction />
<div className="fillerDiv">
        {submittedText.length > 0 ? <Feed /> : <Feed />}
      </div>
*/
