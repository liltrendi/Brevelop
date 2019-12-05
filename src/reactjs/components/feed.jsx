import React from "react"
import { useSelector } from "react-redux"
import TweetStream from "./getTweetStream"
import CallToAction from "./callToAction"
import FeedLayout from "./feedLayout"

const Feed = () => {
  let showFeed = useSelector((state) => state.showFeed)
  if (showFeed) {
    let streamCancelled = false
    return (
      <div>
        <TweetStream opts={streamCancelled} />
        <FeedLayout />
      </div>
    )
  } else {
    let streamCancelled = true
    return (
      <div>
        <TweetStream opts={streamCancelled} />
        <CallToAction />
      </div>
    )
  }
}

export default Feed
