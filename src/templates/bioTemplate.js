import React from "react"
import { graphql } from "gatsby"

import "../styles/index.scss"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Sidebar from "../parts/Sidebar"

export default function bioTemplate({ data }) {
  const post = data.markdownRemark
  const { title } = post.frontmatter

  return (
    <div>
      <Layout>
        <SEO title="About Us" keyword="About Us" />
        <div className="row m-2">
          <div className="col-md-8">
            <div className="post-bar">
              <h1>{title}</h1>
              <div
                style={{ margin: "0.5rem" }}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const bioQuery = graphql`
  query Bio($type: String = "bio") {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
