import React from "react"
import TweetSection from "./tweetSection"
import ProfileSection from "./profileSection"
import "../styles/feedLayout.css"

import { dummyData } from "../helpers/dummyData"

const FeedLayout = props => {
  let data = dummyData
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 tweetSection">
          <TweetSection opts={data.tweetOpts} />
        </div>
        <div className="col-md-5 profileSection">
          <ProfileSection opts={data.profileOpts} />
        </div>
      </div>
    </div>
  )
}

export default FeedLayout
