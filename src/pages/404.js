import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo"

const notfound = () => (
  <div className="d-flex align-items-center mt-3">
    <SEO title="Page Not Found" />
    <div className="container d-flex flex-column">
      <div className="d-flex justify-content-center">
        <img src="https://i.ibb.co/yVr4pnk/5.png" alt="404 Not Found" />
      </div>
      <div className="d-flex justify-content-center">
        <h2>This Page is Lost in Space</h2>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  </div>
)

export default notfound
