import React from "react"
import { useSelector, useDispatch } from "react-redux"
import updateSearchValue from "../actions/updateSearchValue"
import submitSearchValue from "../actions/submitSearchValue"
import { Fade } from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faAtom } from "@fortawesome/free-solid-svg-icons"
import { faSlackHash } from "@fortawesome/free-brands-svg-icons"
import "../styles/navbar.css"

const NavBar = () => {
  let currentText = useSelector((state) => state.searchText),
    dispatch = useDispatch()
  return (
    <Fade duration={300} top>
      <header className="header">
        <nav className="navbar">
          <FontAwesomeIcon
            icon={faAtom}
            className="atomIcon navIcons"
            onClick={() => {
              dispatch(updateSearchValue(""))
              dispatch(submitSearchValue(""))
            }}
          />
          <form
            className="searchform"
            onSubmit={(event) => {
              event.preventDefault()
              currentText.length > 0
                ? dispatch(submitSearchValue(currentText))
                : dispatch(submitSearchValue(""))
            }}
          >
            <input
              className="searchbar"
              type="text"
              name="search"
              placeholder="Find tweets"
              maxLength="17"
              onChange={(event) =>
                dispatch(updateSearchValue(event.target.value))
              }
              value={currentText}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="searchicon"
              onClick={() => {
                currentText.length > 0
                  ? dispatch(submitSearchValue(currentText))
                  : dispatch(submitSearchValue(""))
              }}
            />
          </form>
          <FontAwesomeIcon icon={faSlackHash} className="slackIcon navIcons" />
        </nav>
      </header>
    </Fade>
  )
}

export default NavBar
