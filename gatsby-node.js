const path = require("path")

exports.createPages = async ({ action, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/template/postTemplate.js")

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
}
