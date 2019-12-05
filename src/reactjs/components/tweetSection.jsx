import React from "react"
import TweetStructure from "./tweetStructure"
import { useSelector } from "react-redux"
import FemaleAvatar from "../img/female.svg"
import MaleAvatar from "../img/male.svg"

const parseDate = (date) => {
  let stripped = date.split(" ")
  let newDate = stripped.slice(0, 3).concat(stripped.slice(-1))
  return [`${newDate[0]},`].concat(newDate.slice(1)).join(" ")
}

const parseTime = (time) => {
  let stripped = time.split(" ")
  let newArray = stripped.slice(0, 4)
  return newArray[newArray.length - 1]
    .split(":")
    .slice(0, 2)
    .join(":")
}

const chooseAvatar = (min = 1, max = 2) => {
  let num = Math.floor(Math.random() * max) + min
  if (num === 1) {
    return MaleAvatar
  } else {
    return FemaleAvatar
  }
}

const TweetSection = () => {
  let tweetData = useSelector((state) => state.tweetCollection)
  let tweet1 = {},
    tweet2 = {}
  let tweetStructuresToRender = []
  if (tweetData.length < 1) {
    tweet1 = {
      displayName: "Lady Gaga",
      userName: "ladyGagA",
      avatar: FemaleAvatar,
      text:
        "This is an example of a tweet, that represents a similar outlook once the results you searched for are fetched",
      time: "13.47",
      date: "03 Dec 19",
      retweets: 39,
      favorites: 7,
      replies: 13
    }
    tweet2 = {
      displayName: "Aubrey Graham",
      userName: "champagnepapi",
      avatar: MaleAvatar,
      text:
        "We are retrieving all the data you requested, hang on tight and the tweets will display here shortly",
      time: "00.12",
      date: "03 Dec 19",
      retweets: 2131,
      favorites: 647,
      replies: 593
    }
  } else {
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
        avatar: tweetAvi ? tweetAvi : tweetObj["user"]["profile_image_url"],
        text: tweetObj["text"]
          ? tweetObj["text"]
          : "This tweet was not found. It may have been deleted, or is temporarily unavailable",
        time: tweetTime ? tweetTime : "00:00",
        date: tweetDate ? tweetDate : "03 Dec 19",
        retweets: tweetObj["retweet_count"] ? tweetObj["retweet_count"] : 0,
        favorites: tweetObj["favorite_count"] ? tweetObj["favorite_count"] : 0,
        replies: tweetObj["reply_count"] ? tweetObj["reply_count"] : 0
      }
      return <TweetStructure key={tweetIndex} structure={tweetProp} />
    })
  }
  let finalTweets =
    tweetStructuresToRender.length === 0 ? (
      <div>
        <TweetStructure key={1} structure={tweet1} />
        <TweetStructure key={2} structure={tweet2} />
      </div>
    ) : (
      tweetStructuresToRender
    )
  return <div>{finalTweets}</div>
}

export default TweetSection
