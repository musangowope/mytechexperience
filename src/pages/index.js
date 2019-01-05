import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AboutBlogCard from "../components/AboutBlogCard";
import BlogPostPreview from "../components/BlogPostPreview";
import StayInTouchContent from "../components/AboutBlogCard/components/StayInTouchContent";
import AboutContent from "../components/AboutBlogCard/components/AboutContent";
import { Columns, Column } from "bloomer";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="home-body-section">
          <div className="is-hidden-tablet is-hidden-desktop is-hidden-widescreen">

            <AboutBlogCard
              title="About what I learn't today"
              renderContent={<AboutContent />}
            />

            <AboutBlogCard
              title="Stay in touch"
              renderContent={<StayInTouchContent />}
            />
          </div>

          <Columns>
            <Column isSize="2/3">
              {posts.map(({ node: post }, key) => (
                <BlogPostPreview
                  key={key}
                  blogImage={post.frontmatter.image.publicURL}
                  link={post.fields.slug}
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                />
              ))}
            </Column>
            <Column isSize="1/3">
              <div className="is-hidden-mobile">
                <AboutBlogCard
                  title="About what I learn't today"
                  renderContent={<AboutContent />}
                />

                <AboutBlogCard
                  title="Stay in touch"
                  renderContent={<StayInTouchContent />}
                />
              </div>
            </Column>
          </Columns>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              id
              publicURL
            }
          }
        }
      }
    }
  }
`;
