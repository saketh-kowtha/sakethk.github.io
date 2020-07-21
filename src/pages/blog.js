import { graphql } from "gatsby"
import React from "react"
import Post from "./Post"
import Layout from "../components/Layout"

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            author
            description
            path
            title
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter

        return (
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })}
    </Layout>
  )
}

export default Blog
