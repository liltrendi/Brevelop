import React from "react"
import { useSelector } from "react-redux"
import TweetStream from "./getTweetStream"
import CallToAction from "./callToAction"
import FeedLayout from "./feedLayout"

const Feed = () => {
  let showFeed = useSelector(state => state.showFeed),
    searchText = useSelector(state => state.searchText),
    submitText = useSelector(state => state.submitText)

  if (searchText.length > 0 && submitText.length === 0 && !showFeed) {
    return <FeedLayout opts={false} />
  } else {
    if (showFeed) {
      let streamCancelled = false
      return (
        <div>
          <TweetStream opts={streamCancelled} />
          <FeedLayout opts={true} />
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
}

export default Feed
