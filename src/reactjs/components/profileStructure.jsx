import React from "react"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import MaleAvatar from "../img/male.svg"
import "../styles/profileStructure.css"

const ProfileStructure = props => {
  return (
    <Fade duration={600} top>
      <div className="card profileCard">
        <div className="card-header profileHeader">Top</div>
        <div className="card-body profileBody">Body</div>
      </div>
    </Fade>
  )
}

export default ProfileStructure

/*
 * 
 * .profileTopCard {
	background: #e6e6e6 !important;
	color: #ffc107 !important;	
}

.profileHeader {
	border-bottom: none !important;
}
 * 
 * 
<div className="card profileTopCard">
		<div className="card-header profileHeader">
          <img className="avatar" src={MaleAvatar} alt="Avatar" />
          <div className="profileStats">
			<FontAwesomeIcon icon={faUser} className="retweetIcon" />
          </div>
        </div>
      </div>
      */
