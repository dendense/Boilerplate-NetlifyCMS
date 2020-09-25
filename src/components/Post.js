import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"

import { slugify, truncate } from "../utils/utilityFunction"
import "../styles/index.scss"

let alt = "dendense-image"

const Post = ({ title, author, date, description, path, thumbnail, tags }) => (
  <Card>
    <Card.Img
      variant="top"
      src={thumbnail}
      alt={alt}
      style={{ objectFit: "cover", height: "300px" }}
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {tags.map(tag => (
        <div className="mr-1 d-inline-flex" key={tag}>
          <Link to={`/tag/${slugify(tag)}`}>
            <span className="badge badge-secondary text-uppercase">{tag}</span>
          </Link>
        </div>
      ))}
      <Card.Text>{truncate(description, 60)}</Card.Text>
      <Link to={path} className="btn btn-primary">
        Read more
      </Link>
      <div className="text-muted mt-2 small">
        Author: {author} | Date: {date}
      </div>
    </Card.Body>
  </Card>
)

console.log(Post)

export default Post
