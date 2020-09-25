/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Dendense`,
    author: {
      name: `Deny Farras Febriyanto`,
      summary: `Creating & Develop Something.`,
    },
    description: `Tech & Multimedia, Expand Your Skills Experience!`,
    siteUrl: `https://himitsupro.com`,
    social: {
      instagram: `deny_desu`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
