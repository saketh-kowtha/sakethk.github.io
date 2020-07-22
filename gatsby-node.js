/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require(`node-fetch`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

const getAllBlogs = () =>
  fetch(`http://142.93.223.198:8080/api/getAllArticles/`)

const getBlogbyId = id =>
  fetch(`http://142.93.223.198:8080/api/getArticle/${id}`)

exports.sourceNodes = async ({
  actions: { createNode, createPage },
  createContentDigest,
}) => {
  const result = await getAllBlogs()
  const { data } = await result.json()
  createNode({
    id: "blogs",
    blogs: data,
    parent: null,
    internal: {
      type: `Blogs`,
      contentDigest: createContentDigest(data),
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogs = await graphql(`
    query allBlogs {
      allBlogs {
        edges {
          node {
            blogs {
              description
              id
              published_at
              tag_list
              title
            }
          }
        }
      }
    }
  `)

  const creatNewPage = (id, data) =>
    createPage({
      path: `/articles/${id}`,
      component: path.resolve("./src/template/blog-template.js"),
      context: { ...data },
    })

  for (let i = 0; i < blogs.data.allBlogs.edges[0].node.blogs.length; i++) {
    const id = blogs.data.allBlogs.edges[0].node.blogs[i].id
    const blog = await getBlogbyId(id)
    const { data } = await blog.json()
    creatNewPage(id, data)
  }
}
