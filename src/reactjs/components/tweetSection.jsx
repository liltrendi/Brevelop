import React from "react"
import TweetStructure from "./tweetStructure"
import FemaleAvatar from "../img/female.svg"
import MaleAvatar from "../img/male.svg"

const TweetSection = () => {
  const female = {
      src: FemaleAvatar
    },
    male = {
      src: MaleAvatar
    }
  return (
    <div>
      <TweetStructure opts={female} />
      <TweetStructure opts={male} />
      <TweetStructure opts={female} />
      <TweetStructure opts={male} />
      <TweetStructure opts={female} />
      <TweetStructure opts={male} />
      <TweetStructure opts={female} />
      <TweetStructure opts={male} />
      <TweetStructure opts={female} />
      <TweetStructure opts={male} />
      <TweetStructure opts={female} />
      <TweetStructure opts={male} />
    </div>
  )
}

export default TweetSection
