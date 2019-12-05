import React from "react"
import TweetStructure from "./tweetStructure"
import { useSelector } from "react-redux"
import FemaleAvatar from "../img/female.svg"
import MaleAvatar from "../img/male.svg"

const parseDate = (date) => {
  let stripped = date.split(" ")
  return stripped.slice(0, 3).concat(stripped.slice(-1))
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
    setTimeout(() => {
      tweetStructuresToRender = tweetData.map((tweetObj, tweetIndex) => {
        let tweetDate = parseDate(tweetObj["created_at"])
        let tweetTime = parseTime(tweetObj["created_at"])
        let tweetProp = {
          displayName: tweetObj["user"]["name"],
          userName: tweetObj["user"]["screen_name"],
          avatar: chooseAvatar(1, 2),
          text: tweetObj["text"],
          time: `${tweetTime}`,
          date: `${tweetDate[2]} ${tweetDate[1]} ${tweetDate[3]}`,
          retweets: tweetObj["retweet_count"],
          favorites: tweetObj["favorite_count"],
          replies: tweetObj["reply_count"]
        }
        return <TweetStructure key={tweetIndex} structure={tweetProp} />
      })
    }, 10000)
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
