import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  Columns,
  Column,
  Card,
  CardContent,
  CardImage,
  Content,
  Image
} from "bloomer";

const BlogPostPreview = ({ blogImage, link, title, date, excerpt, key }) => (
  <Fragment>
    <Card className="blog-post-preview" key={key}>
      <CardImage className="blog-post-preview__image">
        <Image src={blogImage} />
      </CardImage>
      <CardContent>
        <Content>
          <Columns>
            <Column isSize="1/2">
              <Link className="blog-post-preview__link" to={link}>
                {title}
              </Link>
            </Column>
            <Column isSize="1/2" className="has-text-right">
              <small>{date}</small>
            </Column>
          </Columns>

          <div className="blog-post-preview__excerpt">{excerpt}</div>

          <br />

          <div className="blog-post-preview__footer has-text-right">
            <Link className="blog-post-preview__footer__button" to={link}>
              Keep Reading
            </Link>
          </div>
        </Content>
      </CardContent>
    </Card>
    <br />
  </Fragment>
);

BlogPostPreview.propTypes = {
  blogImage: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  excerpt: PropTypes.string
};
BlogPostPreview.defaultProps = {};

export default BlogPostPreview;
