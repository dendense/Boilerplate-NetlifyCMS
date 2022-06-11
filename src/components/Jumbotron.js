import React from "react";

import "../styles/index.scss";

const Jumbotron = ({ headline, punchline, jumbcolor }) => (
  <div className={`p-5 mb-4 bg-${jumbcolor} text-white rounded-3`}>
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">{headline}</h1>
      <p className="col-md-8 fs-4 pl-1">{punchline}</p>
    </div>
  </div>
);

export default Jumbotron;
