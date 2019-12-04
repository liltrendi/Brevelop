import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRetweet,
  faHeart,
  faReply,
  faClock
} from "@fortawesome/free-solid-svg-icons"
import "../styles/tweetStructure.css"

const TweetStructure = (props) => {
  return (
    <div className="card">
      <div className="card-header tweetHeader">
        <img className="avatar" src={props.opts.src} alt="Avatar" />
        <div className="twitterNames">
          <h6 className="displayName">Display Name</h6>
          <p className="userName">@cool_username</p>
        </div>
      </div>
      <div className="card-body tweetBody">
        <h5>
          Tweet body here or long lorem ipsum text that can fit or maybe wrap
          around this card to span multiple lines
        </h5>
        <div className="tweetFooter">
          <p className="card-text tweetCreatedAt">
            <FontAwesomeIcon icon={faClock} className="clockIcon" />
            <small className="tweetTime">
              13:47 <span>&#183;</span> 03 Dec 19
            </small>
          </p>
          <div className="retweetDiv">
            <FontAwesomeIcon icon={faRetweet} className="retweetIcon" />
            <small className="retweetValue">32</small>
          </div>
          <div className="heartDiv">
            <FontAwesomeIcon icon={faHeart} className="heartIcon" />
            <small className="heartValue">7</small>
          </div>
          <div className="replyDiv">
            <FontAwesomeIcon icon={faReply} className="replyIcon" />
            <small className="replyValue">2</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetStructure
