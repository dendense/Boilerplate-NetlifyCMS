import React from "react"

import Post from "./Post"
import "../styles/index.scss"

export default function PostsCard(props) {
  return (
    <div className={`row row-cols-1 row-cols-md-${props.col}`}>
      {props.data.map(i => (
        <div key={i.frontmatter.path} className="col mb-4">
          <Post
            title={i.frontmatter.title}
            author={i.frontmatter.author}
            date={i.frontmatter.date}
            description={i.frontmatter.description}
            path={i.frontmatter.path}
            image={i.frontmatter.thumbnail.childImageSharp.fluid.src}
            tags={i.frontmatter.tags}
          />
        </div>
      ))}
    </div>
  )
}
