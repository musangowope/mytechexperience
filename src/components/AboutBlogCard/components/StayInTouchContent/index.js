import React from "react";
import { FaEnvelope, FaTwitter } from "react-icons/fa";

const StayInTouchContent = () => (
  <div className="stay-in-touch">
    <div className="stay-in-touch__twitter-link">
      <FaTwitter/> Follow us on twitter
    </div>
    <div className="stay-in-touch__email-link">
      <FaEnvelope/> Get email notifications
    </div>
  </div>
);

StayInTouchContent.propTypes = {};
StayInTouchContent.defaultProps = {};

export default StayInTouchContent;
