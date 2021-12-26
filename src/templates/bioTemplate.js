import React from "react";
import { Link, graphql } from "gatsby";

import { Table } from "react-bootstrap";

import "../styles/index.scss";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Sidebar from "../parts/Sidebar";

export default function bioTemplate({ data }) {
  const post = data.markdownRemark;
  const { title, email, fullname, website, websitename, image } =
    post.frontmatter;

  return (
    <div>
      <Layout>
        <SEO title="About Me" keyword="About Me" />
        <div className="row m-2">
          <div className="col-md-8">
            <div className="post-bar">
              <h1>{title}</h1>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={image} className="card-img" alt="DENDENSE" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Information</h5>
                      <p className="card-text">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th scope="row">Name</th>
                              <td>{fullname}</td>
                            </tr>
                            <tr>
                              <th scope="row">Email</th>
                              <td>
                                <Link href={`mailto:${email}`}>{email}</Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Website</th>
                              <td>
                                <Link to={website} target="_blank">
                                  {websitename}
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div>
              <h2>Portfolio</h2>
              <p>
                <b>I'm a Teenager, Student, and Front-End Developer!</b>
              </p>
              <div style={{ paddingLeft: "1rem" }}>
                <li>
                  🔭 I’m currently working on a Project Polaris &amp; Himitsu
                  Project!
                </li>
                <li>🌱 I’m currently learning everything 🤠</li>
                <li>👯 I’m looking to collaborate with other developers</li>
                <li>🥅 2021 Goals: Contribute more to Open Source projects</li>
                <li>⚡ Fun fact: I love music & Japanese things</li>
              </div>
              <br />
              <p>
                <b>Education History</b>
              </p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Primary School</th>
                    <th>Junior High School</th>
                    <th>Senior High School</th>
                    <th>College</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SDN Penggung 1 (2013)</td>
                    <td>SMPN 2 Cimahi (2016)</td>
                    <td>SMKN 1 Cimahi (2019)</td>
                    <td>UNIKOM (Out)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const bioQuery = graphql`
  query Bio($type: String = "bio") {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        email
        fullname
        websitename
        website
        image
      }
      html
    }
  }
`;
