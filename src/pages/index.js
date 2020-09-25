import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import PostsCard from "../components/PostsCard"
import image1 from "../assets/image.png"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Welcome to my blog" />
      <div style={{ marginLeft: "1rem" }}>
        <h4>Latest Posts</h4>
        <PostsCard
          title="Testing Blog Dendense"
          author="dendense"
          date="2020-09-25"
          description="Lorem ipsum dolor sit amet"
          path="/"
          thumbnail={image1}
          tags="blog"
          col={4}
        />
      </div>
    </Layout>
  )
}
