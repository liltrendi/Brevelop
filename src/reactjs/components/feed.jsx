import React from "react"
import { useSelector } from "react-redux"
import TweetStream from "./getTweetStream"
import CallToAction from "./callToAction"
import FeedLayout from "./feedLayout"

const Feed = () => {
  let showFeed = useSelector(state => state.showFeed),
    streamStarted = useSelector(state => state.streamStarted),
    collection = useSelector(state => state.tweetCollection)
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
    let whatToRender =
      streamStarted && collection.length > 0 ? <FeedLayout /> : <CallToAction />
    return (
      <div>
        <TweetStream opts={streamCancelled} />
        {whatToRender}
      </div>
    )
  }
}

export default Feed
