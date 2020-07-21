module.exports = {
  pathPrefix: "/saketh-kowtha.github.io",
  siteMetadata: {
    title: `Kowtha Saketh`,
    description: `Kowtha Saketh Personal portfolio site`,
    author: `Kowtha Saketh`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
