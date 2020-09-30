import React from "react"

import Post from "./Post"
import "../styles/index.scss"

export default function PostsCard(props) {
  return (
    <div className={`row row-cols-1 row-cols-md-${props.col}`}>
      {props.data.map(i => (
        <div key={i.frontmatter.path} className="col mb-4">
          <Post
            key={i.frontmatter.path}
            title={i.frontmatter.title}
            author={i.frontmatter.author}
            date={i.frontmatter.date}
            path={i.frontmatter.path}
            description={i.frontmatter.description}
            image={i.frontmatter.image.childImageSharp.fluid.src}
            tags={i.frontmatter.tags}
          />
        </div>
      ))}
    </div>
  )
}
