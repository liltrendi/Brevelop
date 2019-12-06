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
            <img src={MaleAvatar} className="profileAvatar" alt="Avatar" />
            <div className="profileHeaderNames">
              <h5>Brian Njogu</h5>
              <h6>@briancanspit</h6>
            </div>
          </div>
          <div className="profileIcons">
            <FontAwesomeIcon icon={faTwitter} className="profTwitterIcon" />
            <FontAwesomeIcon icon={faUsers} className="profTwitterIcon" />
            <FontAwesomeIcon icon={faUserPlus} className="profTwitterIcon" />
          </div>
          <div className="card-body profileBody">
            User description and form to tweet
            <div className="profileForm">
              <form>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="10"
                    value="Tweet something"
                  ></textarea>
                </div>
                <div className="profileBtnContainer">
                  <button className="btn btn-md btn-info profileTweetBtn">
                    Tweet <FontAwesomeIcon icon={faPaperPlane} />
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
