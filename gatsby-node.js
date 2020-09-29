const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/postTemplate.js")

  var data_graphql = await graphql(`
    query BoilerplateNetlifyCMS {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
        distinct(field: frontmatter___tags)
      }
    }
  `)

  for (let edge of data_graphql.data.allMarkdownRemark.edges) {
    let { node } = edge
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    })
  }
}
