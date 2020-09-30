import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import "../styles/index.scss"
import { slugify } from "../utils/utilityFunction"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Sidebar from "../parts/Sidebar"

export default function postTemplate({ data }) {
  const post = data.markdownRemark
  const { title, author, date, tags, path, image } = post.frontmatter

  //Set your public url after published into production build
  const disqusConfig = {
    // url: `https://himitsupro.com${path}`,
    title: title,
    identifier: path.split("/").slice(-1)[0],
  }

  return (
    <div>
      {console.log(image)}
      <Layout>
        <SEO title={title} keyword={(title, tags)} />
        <div className="row post-body">
          <div className="col-md-8">
            <div className="post-bar">
              <h1>{title}</h1>
              <p>
                Posted by <b>{author}</b> on {date} |{" "}
                <CommentCount config={disqusConfig} />
              </p>
              <img
                src={image.childImageSharp.fluid.src}
                alt={title}
                width="100%"
                height="500px"
                style={{ objectFit: "cover" }}
              />
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
              <div style={{ marginTop: "1rem" }}>
                <Disqus config={disqusConfig} />
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
        path
        date(formatString: "DD MMMM, YYYY")
        title
        author
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
      html
    }
  }
`
