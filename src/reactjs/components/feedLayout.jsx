import React from "react"
import TweetSection from "./tweetSection"
import ProfileSection from "./profileSection"
import "../styles/feedLayout.css"

const FeedLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 tweetSection">
          <TweetSection />
        </div>
        <div className="col-md-4 profileSection">
          <ProfileSection />
        </div>
      </div>
    </div>
  )
}

export default FeedLayout
