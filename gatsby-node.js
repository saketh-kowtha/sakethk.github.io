/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(`http://142.93.223.198:8080/api/getAllArticles/`)
  const resultData = await result.json()
  createNode({
    id: "blogs",
    blogs: resultData.data,
    parent: null,
    internal: {
      type: `Blogs`,
      contentDigest: createContentDigest(resultData.data),
    },
  })
}
