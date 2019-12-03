import React from "react"
import ComputerSvg from "../img/pc.svg"
import "../styles/guide.css"

const Guide = () => {
  return (
    <div className="container guide-container">
      <div className="row">
        <div className="col-md-12 guide-col">
          <h3 className="explain-header">
            Keep up to date with all the latest tweets and trends from Twitter.
            Enter a keyword, and get live tweets displayed back to you.
          </h3>

          <img
            className="pcSvg"
            src={ComputerSvg}
            alt="User guide avatar"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Guide
