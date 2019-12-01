import React from "react"
import { Fade } from "react-reveal"
import NavBar from "./navbar"

const Layout = () => {
  return (
    <Fade duration={1500} clear>
      <NavBar />
    </Fade>
  )
}

export default Layout
