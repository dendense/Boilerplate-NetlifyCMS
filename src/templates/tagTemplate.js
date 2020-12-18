import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import PostsCard from "../components/PostsCard"

export default function tagTemplate({ data, pageContext }) {
  const { tags } = pageContext
  return (
    <Layout>
      <SEO title={"Tags " + tags} keyword={tags} />
      <div className="container-fluid">
        <h1>Post with tags "{tags}"</h1>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  )
}
export const tagsQuery = graphql`
  query TagPosts($tags: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { eq: $tags } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          path
          tags
          image
        }
      }
    }
  }
`
