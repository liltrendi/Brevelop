import React from "react"
import { useSelector, useDispatch } from "react-redux"
import updateSearchValue from "../actions/updateSearchValue"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "../styles/navbar.css"

const NavBar = () => {
  let currentText = useSelector((state) => state.searchText),
    dispatch = useDispatch()
  return (
    <Fade duration={300} top>
      <header className="header">
        <nav className="navbar">
          <form>
            <input
              className="searchbar"
              type="text"
              name="search"
              placeholder="Find tweets"
              onChange={(event) =>
                dispatch(updateSearchValue(event.target.value))
              }
              value={currentText}
            />
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
          </form>
        </nav>
      </header>
    </Fade>
  )
}

export default NavBar
