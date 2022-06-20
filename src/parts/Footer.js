import React from "react";

const Footer = (props) => (
  <div className="container">
    <div className="d-flex justify-content-center" style={{ margin: "2rem" }}>
      Copyright 2022 {props.copyright}
    </div>
  </div>
);

export default Footer;
