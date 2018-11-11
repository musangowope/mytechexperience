import React from "react";
import Helmet from "react-helmet";
import "font-awesome/css/font-awesome.min.css";

import PrimaryNavbar from "../../components/PrimaryNavbar";
import Header from '../../components/Header'

import "../../css/styles.scss";


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <PrimaryNavbar />
    <Header />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
