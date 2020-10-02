import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import PostsCard from "../components/PostsCard"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Welcome to my blog" />
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h4>Latest Posts</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query Boilerplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          tags
          path
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
        }
      }
    }
  }
`
