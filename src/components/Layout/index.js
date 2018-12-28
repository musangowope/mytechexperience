import React from "react";
import Helmet from "react-helmet";
import "font-awesome/css/font-awesome.min.css";

import PrimaryNavbar from "../../components/PrimaryNavbar";

import "../../css/styles.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="What I learn't today">
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="description"
        content="A blog about Musango Wope learning to code"
      />
    </Helmet>
    <PrimaryNavbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
