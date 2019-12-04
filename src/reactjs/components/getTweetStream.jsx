import React from "react"
import { useSelector, useDispatch } from "react-redux"
import addTweetToState from "../actions/addTweetToState"
const { remote } = window.require("electron")

const TweetStream = () => {
  let dispatch = useDispatch(),
    keyword = useSelector((state) => state.submitText),
    twitStream = remote.getGlobal("GetTweets")(keyword)

  twitStream.on("tweet", (tweet) => {
    dispatch(addTweetToState(tweet))
  })
  twitStream.on("error", (error) => {
    twitStream.stop()
  })

  let tweetFeed = useSelector((state) => state.tweetCollection)

  return (
    <div>
      <p>Feed</p>
    </div>
  )
}

export default TweetStream
