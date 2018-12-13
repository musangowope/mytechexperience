import React, { Fragment } from "react";
import { Card, CardHeader, CardContent } from "bloomer";
import PropTypes from "prop-types";

const AboutBlogCard = ({
  title,
  contentComponent,
  renderContent,
  backgroundPicture,
  hasOverlayStyle
}) => {
  return (
    <Fragment>
      <Card
        className="about-blog-card"
        style={{ backgroundImage: `url(${backgroundPicture})` }}
      >
        <CardHeader
          className={`about-blog-card__header ${hasOverlayStyle &&
            `has-text-white`}`}
        >
          {title}
        </CardHeader>
        {hasOverlayStyle && <div className="about-blog-card__overlay" />}
        <CardContent
          className={`${
            hasOverlayStyle
              ? "about-blog-card__content--overlay"
              : "about-blog-card__content"
          }`}
        >
          {renderContent}
        </CardContent>
      </Card>
    </Fragment>
  );
};

AboutBlogCard.propTypes = {};
AboutBlogCard.defaultProps = {};

export default AboutBlogCard;
