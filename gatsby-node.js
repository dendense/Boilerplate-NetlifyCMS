const path = require("path");

// API Script for generate pages dynamically
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("src/templates/postTemplate.js");
  const bioTemplate = path.resolve("src/templates/bioTemplate.js");
  const tagTemplate = path.resolve("src/templates/tagTemplate.js");

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
  `);

  for (let edge of data_graphql.data.allMarkdownRemark.edges) {
    let { node } = edge;
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    });
  }
  createPage({
    path: `/bio`,
    component: bioTemplate,
  });

  data_graphql.data.allMarkdownRemark.distinct.forEach((tag) => {
    createPage({
      path: `/tag/${tag.toLowerCase()}`,
      component: tagTemplate,
      context: {
        tags: tag,
      },
    });
  });
};
