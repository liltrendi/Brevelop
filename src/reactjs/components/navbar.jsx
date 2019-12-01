import React from "react"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "../styles/navbar.css"

const NavBar = () => {
  return (
    <Fade duration={300} top>
      <header className="header">
        <nav className="navbar">
          <input
            className="searchbar"
            type="text"
            name="search"
            placeholder="Find tweets"
          />
          <FontAwesomeIcon icon={faSearch} className="searchicon" />
        </nav>
      </header>
    </Fade>
  )
}

export default NavBar
