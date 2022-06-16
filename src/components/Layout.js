import React from "react";
import PropTypes from "prop-types";

import "../styles/index.scss";
import Nav from "../parts/Nav";
import Footer from "../parts/Footer";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

const Layout = ({ children }) => (
  <>
    {/* <Helmet>
      <script type="text/javascript" src={withPrefix('scripts/themes.js')} type="module"></script>
    </Helmet> */}
    <div
      className="dendense-font"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <Nav brand="DENDENSE" />
      <div className="container-fluid" style={{ padding: "1rem" }}>
        {children}
      </div>
      <Footer copyright="Deny Farras Febriyanto" />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
