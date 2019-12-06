import React, { Component } from "react"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
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
            <img src={MaleAvatar} className="avatar" alt="Avatar" />
          </div>
          <div className="card-body profileBody">Body</div>
        </div>
      </Fade>
    )
  }
}

export default ProfileStructure
