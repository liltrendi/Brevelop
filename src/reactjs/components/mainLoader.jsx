import React from "react"
import {Fade} from "react-reveal"
import logo from '../../logo.svg';
import "../styles/mainLoader.css"

const MainLoader = () => {
	return (
		<div className="preloaderContainer">
			<div className="preloader">
				<Fade duration={1000} clear>
					<img src={logo} className="logoPreloader" alt="Preloader" />
				</Fade>
				<Fade duration={600} delay={1300} bottom>
					<h3 className="appName">Brevelop</h3>
				</Fade>
			</div>
		</div>
	)
}

export default MainLoader
