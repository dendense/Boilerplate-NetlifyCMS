import React from "react"
import { graphql } from "gatsby"

import "../styles/index.scss"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Sidebar from "../parts/Sidebar"

export default function bioTemplate({ data }) {
  const post = data.markdownRemark
  const { title, email, username, github, image } = post.frontmatter

  return (
    <div>
      <Layout>
        <SEO title="About Us" keyword="About Us" />
        <div className="row m-2">
          <div className="col-md-8">
            <div className="post-bar">
              <h1>{title}</h1>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={image.childImageSharp.fluid.src}
                      className="card-img"
                      alt="DENDENSE"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{username}</h5>
                      <p className="card-text">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
        email
        username
        github
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      html
    }
  }
`
