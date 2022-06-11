import React from "react";
import { graphql } from "gatsby";

import "../styles/index.scss";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

export default function bioTemplate({ data }) {
  const post = data.markdownRemark;
  const {
    brand,
    community,
    email,
    fullname,
    website,
    github,
    image,
    specs,
    address,
    phone,
    rank,
    instagram,
  } = post.frontmatter;

  return (
    <Layout>
      <Seo title="About Me" keyword="About Me" />
      {/* This is Profile Division */}
      <div className="row gutters-sm container-fluid mt-3">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={image}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                  alt="DENDENSE"
                  width={150}
                  height={150}
                />
                <div className="mt-3">
                  <h4>{brand}</h4>
                  <p className="text-secondary mb-1">{specs}</p>
                  <p className="text-secondary mb-1">{address}</p>
                  <a
                    href={`mailto:${email}`}
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">Website</h6>
                <span className="text-secondary">
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    {website}
                  </a>
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">Github</h6>
                <span className="text-secondary">
                  <a
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    {github}
                  </a>
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">Community</h6>
                <span className="text-secondary">
                  <a
                    href={`http://instagram.com/${community}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    @{community}
                  </a>
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">Instagram</h6>
                <span className="text-secondary">
                  <a
                    href={`http://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    @{instagram}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <h4>Little Things About Me</h4>
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{fullname}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Military Rank</h6>
                </div>
                <div className="col-sm-9 text-secondary">{rank}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">{phone}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">{address}</div>
              </div>
            </div>
          </div>

          <div className="row gutters-sm">
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h3>Support Us</h3>
                  <div
                    className="card bg-light"
                    style={{ marginBottom: "1rem" }}
                  >
                    <div className="card-body">
                      <a
                        type="link"
                        className="container-fluid btn btn-info text-white"
                        href="https://trakteer.id/dendense-project"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fa fa-heart" /> Support Us on Trakteer!
                      </a>
                      <a
                        type="link"
                        className="container-fluid btn btn-warning mt-2"
                        href="https://forms.gle/EJWqRyfLTUTV58Dp9"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fa fa-flag" /> Report Error Links
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is Profile Division */}
    </Layout>
  );
}

export const bioQuery = graphql`
  query Bio($type: String = "bio") {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        brand
        community
        email
        fullname
        github
        website
        image
        specs
        address
        phone
        rank
        instagram
      }
      html
    }
  }
`;
