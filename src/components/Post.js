import React from "react";
import { Link } from "gatsby";
import { Card } from "react-bootstrap";

import { slugify, truncate } from "../utils/utilityFunction";
import "../styles/index.scss";

const Post = ({ title, author, date, description, path, image, tags }) => (
  <Card>
    <Card.Img
      variant="top"
      src={image}
      alt={title}
      style={{ objectFit: "cover", height: "200px" }}
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {tags.map((tag) => (
        <div
          className="d-inline-flex"
          style={{ marginRight: "0.1rem" }}
          key={tag}
        >
          <Link to={`/tag/${slugify(tag)}`}>
            <span className="badge bg-secondary text-uppercase">{tag}</span>
          </Link>
        </div>
      ))}
      <Card.Text>{truncate(description, 60)}</Card.Text>
      <Link to={path} className="btn btn-primary">
        Read more
      </Link>
      <div className="text-muted mt-2 small">Date: {date}</div>
    </Card.Body>
  </Card>
);

export default Post;
