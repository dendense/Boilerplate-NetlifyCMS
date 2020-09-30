import React from "react"
import { Link, graphql } from "gatsby"
// import { CommentCount } from "gatsby-plugin-disqus" //Disqus

import "../styles/index.scss"
import { slugify } from "../utils/utilityFunction"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Sidebar from "../parts/Sidebar"

export default function postTemplate({ data }) {
  const post = data.markdownRemark
  const { title, author, date, image, tags } = post.frontmatter

  //Set your public url after published into production build
  // const disqusConfig = {
  //   // url: `https://himitsupro.com${path}`,
  //   title: title,
  //   identifier: path.split("/").slice(-1)[0],
  //

  return (
    <div>
      <Layout>
        <SEO title={title} keyword={(title, tags)} />
        <div className="row mt-3 post-body">
          <div className="col-md-8">
            <div className="post-bar">
              <h1>{title}</h1>
              <p>
                Posted by <b>{author}</b> on {date} |{" "}
                {/* <CommentCount config={disqusConfig} /> */}
              </p>
              <img src={image} alt={title} width="300px" />
              <div
                style={{ margin: "0.5rem" }}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div style={{ marginTop: "2rem" }}>
                Tags :{" "}
                {tags.map(tag => (
                  <div className="mr-1 d-inline-flex" key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <span className="badge badge-secondary text-uppercase">
                        {tag}
                      </span>
                    </Link>
                  </div>
                ))}
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

export const blogQuery = graphql`
  query BlogPerPosts($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
              originalImg
            }
          }
        }
      }
      html
    }
  }
`
