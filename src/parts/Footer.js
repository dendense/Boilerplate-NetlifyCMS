import React from "react";
import ThemeSwitch from "../components/ThemeSwitch";

const Footer = (props) => (
  <div className="container">
    <div className="text-center"><ThemeSwitch/></div>
    <div className="d-flex justify-content-center" style={{ margin: "2rem" }}>
      Copyright 2022 {props.copyright}
    </div>
  </div>
);

export default Footer;
