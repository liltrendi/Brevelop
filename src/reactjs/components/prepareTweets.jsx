import React from "react"
import { useSelector } from "react-redux"
import TweetStructure from "./tweetStructure"

import {
  getTodayDate,
  parseDate,
  parseTime,
  chooseAvatar
} from "../helpers/helperFunctions"

const PrepareTweets = () => {
  let tweetData = useSelector(state => state.tweetCollection),
    tweetStructuresToRender = []

  if (!(tweetData.length < 2 && !tweetData.some(item => item === null))) {
    tweetStructuresToRender = tweetData.map((tweetObj, tweetIndex) => {
      let tweetTime = parseTime(tweetObj["created_at"]),
        tweetDate = parseDate(tweetObj["created_at"]),
        tweetAvi = chooseAvatar(1, 2)
      let tweetProp = {
        displayName: tweetObj["user"]["name"]
          ? tweetObj["user"]["name"]
          : "Not Found",
        userName: tweetObj["user"]["screen_name"]
          ? tweetObj["user"]["screen_name"]
          : "userNameNotFound",
        avatar: tweetAvi,
        text: tweetObj["text"]
          ? tweetObj["text"]
          : "This tweet was not found. It may have been deleted, or is temporarily unavailable",
        time: tweetTime ? tweetTime : getTodayDate()[0],
        date: tweetDate ? tweetDate : getTodayDate()[1],
        retweets: tweetObj["retweet_count"] ? tweetObj["retweet_count"] : 0,
        favorites: tweetObj["favorite_count"] ? tweetObj["favorite_count"] : 0,
        replies: tweetObj["reply_count"] ? tweetObj["reply_count"] : 0
      }
      return <TweetStructure key={tweetIndex} structure={tweetProp} />
    })
  }
  if (tweetStructuresToRender.length > 0) {
    return <div>{tweetStructuresToRender}</div>
  } else {
    return <span></span>
  }
}

export default PrepareTweets
