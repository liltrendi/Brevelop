import React from "react"
import { Fade } from "react-reveal"
import Guide from "./guide"
import "../styles/callToAction.css"

const CallToAction = () => {
  return (
    <Fade delay={100} duration={500} clear>
      <div className="callToAction">
        <Guide />
      </div>
    </Fade>
  )
}

export default CallToAction
