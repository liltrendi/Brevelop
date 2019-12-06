import React, { Component } from "react"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faUsers,
  faUserPlus,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import MaleAvatar from "../img/male.svg"
import "../styles/profileStructure.css"

class ProfileStructure extends Component {
  constructor() {
    super()
    this.state = {
      fixate: false
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll >= 75) {
      this.setState({ fixate: true })
    } else {
      this.setState({ fixate: false })
    }
  }

  render() {
    let styles = {
      position: "fixed",
      top: 20,
      width: "35.35%"
    }
    return (
      <Fade duration={600} top>
        <div className="card profileCard" style={this.state.fixate && styles}>
          <div className="card-header profileHeader">
            <div className="profileHeaderTop">
              <img src={MaleAvatar} className="profileAvatar" alt="Avatar" />
              <div className="profileHeaderNames">
                <h6 className="profileDisplayName">Brian Njogu</h6>
                <p className="profileUserName">@briancanspit</p>
              </div>
            </div>
            <div className="profileIcons">
              <span className="profIconSpan">
                <FontAwesomeIcon icon={faTwitter} className="profileIcon" />
                <h6 className="profileTweetCount">203</h6>
                <h6 className="profileIconInfo">Tweets</h6>
              </span>
              <span className="profIconSpan">
                <FontAwesomeIcon icon={faUsers} className="profileIcon" />
                <h6 className="profileFollowerCount">15.6K</h6>
                <h6 className="profileIconInfo">Followers</h6>
              </span>
              <span className="profIconSpan">
                <FontAwesomeIcon icon={faUserPlus} className="profileIcon" />
                <h6 className="profileFollowingCount">968</h6>
                <h6 className="profileIconInfo">Following</h6>
              </span>
            </div>
          </div>
          <div className="card-body profileBody">
            <p className="alert profileTweetAlert">
              What's on your mind? Tweet it!
            </p>
            <div className="profileForm">
              <form>
                <div className="form-group">
                  <textarea
                    className=" profileTextArea"
                    rows="5"
                    maxLength="140"
                  ></textarea>
                </div>
                <div className="profileBtnContainer">
                  <span className="tweetCharacterCount">
                    <small>140 characters left</small>
                  </span>
                  <button className="btn btn-lg btn-info profileTweetBtn">
                    Tweet{" "}
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="profilePaperPlane"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default ProfileStructure
