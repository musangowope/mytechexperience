import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import AboutBlogCard from "../components/AboutBlogCard";
import StayInTouchContent from "../components/AboutBlogCard/components/StayInTouchContent";
import { Columns, Column } from "bloomer";
import { information } from "../constants/about-us-information";
import { LookingWritersImg } from "../components/AboutBlogCard/images-constant";
import LookingForContributors from "../components/AboutBlogCard/components/LookingForContributions";
import Header from "../components/Header";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>

        <Header />
        {/*<SecondaryNavbar/>*/}

        <section className="home-body-section">
          <Columns>
            <Column isSize="2/3">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2 has-text-white">
                  Latest Stories
                </h1>
              </div>
              {posts.map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
            </Column>
            <Column isSize="1/3">
              <AboutBlogCard
                title="About CTFed Experience Blog"
                renderContent={information.aboutUs}
              />
              <br />

              <AboutBlogCard
                title="Stay in touch"
                renderContent={<StayInTouchContent />}
              />

              <br />

              <AboutBlogCard
                title="Looking for other contributors"
                backgroundPicture={LookingWritersImg}
                hasOverlayStyle={true}
                renderContent={<LookingForContributors />}
              />

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
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
