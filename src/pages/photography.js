import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PostsCard from "../components/PostsCard";
import Jumbotron from "../components/Jumbotron";

export default function Photography({ data }) {
  return (
    <Layout>
      <Seo title="Photography" />
      <Jumbotron
        headline="Photography"
        punchline="There's Love in Every Snap."
        jumbcolor="primary"
      />
      <div className="container">
        <h4>Latest Shots</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  );
}

export const IndexQuery = graphql`
  query Photography {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { eq: "photography" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          tags
          path
          image
        }
      }
    }
  }
`;
