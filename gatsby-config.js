module.exports = {
  pathPrefix: "/sakethk.github.io",
  siteMetadata: {
    title: `Saketh Kowtha`,
    description: `Saketh Kowtha Personal portfolio site`,
    author: `Saketh Kowtha`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-use-query-params",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "SAKETH KOWTHA",
        short_name: "Saketh Kowtha",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "./src/static/assets/me.jpeg", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
  ],
}
