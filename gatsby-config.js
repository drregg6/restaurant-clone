/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * Other useful plugins:
 * = gatsby-plugin-manifest:
 *    - for a custom favicon
 * = gatsby-source-contentful
 *    - hooks up with contentful-cms
 * = gatsby-source-markdown
 *    - and markdown files
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    "title": "Dave's Restaurant",
    "author": "Dave Regg",
    "description": "A restaurant created by Dave to serve some delicious American foods and drinks",
    "keywords": ["restaurant", "american", "cuisine", "dining"]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}