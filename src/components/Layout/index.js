import React from "react";
import Helmet from "react-helmet";
import "font-awesome/css/font-awesome.min.css";

import PrimaryNavbar from "../../components/PrimaryNavbar";

import "../../css/styles.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <PrimaryNavbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
