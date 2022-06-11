import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PostCard from "../components/PostsCard";
import Jumbotron from "../components/Jumbotron";

export default function vectorart({ data }) {
  return (
    <Layout>
      <Seo title="Traveling" />
      <Jumbotron
        headline="Traveling"
        punchline="Very Moodly Traveler."
        jumbcolor="warning"
      />
      <div className="container">
        <h4>Travel Lists</h4>
        <PostCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  );
}

export const IndexQuery = graphql`
  query VectorArt {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { eq: "traveling" } } }
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
