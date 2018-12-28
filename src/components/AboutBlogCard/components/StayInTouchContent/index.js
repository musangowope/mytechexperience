import React from "react";
import { FaEnvelope, FaTwitter } from "react-icons/fa";

const StayInTouchContent = () => (
  <div className="stay-in-touch">
    <div className="stay-in-touch__twitter-link">
      <a href="https://twitter.com/CodeUiux" target="_blank">
        <FaTwitter/> Follow us on twitter
      </a>
    </div>
    <div className="stay-in-touch__email-link">
      <a href="mailto:musangow@gmail.com?Subject=Hello%20again" target="_top">
        <FaEnvelope/> Contact me
      </a>
    </div>
  </div>
);

StayInTouchContent.propTypes = {};
StayInTouchContent.defaultProps = {};

export default StayInTouchContent;
