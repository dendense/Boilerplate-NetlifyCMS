import React from "react"

import "../styles/index.scss"

const Jumbotron = ({ headline, punchline }) => (
  <div
    className="jumbotron jumbotron-fluid"
    style={{ marginLeft: "1rem", marginRight: "1rem" }}
  >
    <div className="container">
      <h1 className="display-4">{headline}</h1>
      <p className="lead pl-1">{punchline}</p>
    </div>
  </div>
)

export default Jumbotron
