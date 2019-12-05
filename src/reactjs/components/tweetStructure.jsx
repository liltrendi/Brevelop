import React from "react"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRetweet,
  faHeart,
  faReply,
  faClock
} from "@fortawesome/free-solid-svg-icons"
import "../styles/tweetStructure.css"

const TweetStructure = (props) => {
  const tweet = props.structure
  return (
    <Fade duration={600} bottom>
      <div className="card">
        <div className="card-header tweetHeader">
          <img className="avatar" src={tweet.avatar} alt="Avatar" />
          <div className="twitterNames">
            <h6 className="displayName">{tweet.displayName}</h6>
            <p className="userName">@{tweet.userName}</p>
          </div>
        </div>
        <div className="card-body tweetBody">
          <h5>{tweet.text}</h5>
          <div className="tweetFooter">
            <p className="card-text tweetCreatedAt">
              <FontAwesomeIcon icon={faClock} className="clockIcon" />
              <small className="tweetTime">
                {tweet.time} <span>&#183;</span> {tweet.date}
              </small>
            </p>
            <div className="retweetDiv">
              <FontAwesomeIcon icon={faRetweet} className="retweetIcon" />
              <small className="retweetValue">{tweet.retweets}</small>
            </div>
            <div className="heartDiv">
              <FontAwesomeIcon icon={faHeart} className="heartIcon" />
              <small className="heartValue">{tweet.favorites}</small>
            </div>
            <div className="replyDiv">
              <FontAwesomeIcon icon={faReply} className="replyIcon" />
              <small className="replyValue">{tweet.replies}</small>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default TweetStructure
