import React from "react"
import { useSelector } from "react-redux"
import "../styles/callToAction.css"

const msgDisplayLogic = (search, submit) => {
  if (submit.length !== search.length) {
    return (
      <h5
        className="alert cta-header"
        style={{ background: "#ff6347", color: "#2f2e41" }}
      >
        Hit Enter to begin search
      </h5>
    )
  }
  if (search.length > 0) {
    if (submit.length > 0) {
      return (
        <h5
          className="alert cta-header"
          style={{ background: "#ff6347", color: "#2f2e41" }}
        >
          Finding all matching tweets
        </h5>
      )
    }
  } else {
    if (submit.length < 1) {
      return (
        <h5
          className="alert cta-header"
          style={{ background: "#ff6347", color: "#2f2e41" }}
        >
          Discover tweets on Brevelop
        </h5>
      )
    }
  }
}

const CallToAction = () => {
  let searchText = useSelector((state) => state.searchText),
    submittedText = useSelector((state) => state.submitText)
  return <div className="cta">{msgDisplayLogic(searchText, submittedText)}</div>
}

export default CallToAction

/*
if(submit.length > 0 && search.length < 1){
	return <h5 className="alert alert-danger cta-header">Search again for more</h5>
}
*/
