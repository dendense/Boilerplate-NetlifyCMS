import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"

import { slugify, truncate } from "../utils/utilityFunction"
import "../styles/index.scss"

let alt = "dendense-image"

const PostsCard = ({
  sideGap,
  col,
  title,
  author,
  date,
  description,
  path,
  thumbnail,
  tags,
}) => (
  <div className={`row row-cols-1 row-cols-md-${col}`}>
    <div className="col mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={thumbnail}
          alt={alt}
          style={{ objectFit: "cover", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="mr-1 d-inline-flex" key={tags}>
            <Link to={`/tag/${slugify(tags)}`}>
              <span className="badge badge-secondary text-uppercase">
                {tags}
              </span>
            </Link>
          </div>
          <Card.Text>{truncate(description, 60)}</Card.Text>
          <Link to={path} className="btn btn-primary">
            Read more
          </Link>
          <div className="text-muted mt-2 small">
            Author: {author} | Date: {date}
          </div>
        </Card.Body>
      </Card>
    </div>
    <div className="col mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={thumbnail}
          alt={alt}
          style={{ objectFit: "cover", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="mr-1 d-inline-flex" key={tags}>
            <Link to={`/tag/${slugify(tags)}`}>
              <span className="badge badge-secondary text-uppercase">
                {tags}
              </span>
            </Link>
          </div>
          <Card.Text>{truncate(description, 60)}</Card.Text>
          <Link to={path} className="btn btn-primary">
            Read more
          </Link>
          <div className="text-muted mt-2 small">
            Author: {author} | Date: {date}
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default PostsCard
