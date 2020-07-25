import React from "react"
import Layout from "../components/Layout"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components"
import blogIcon from "../static/assets/blog.svg"
import Post from "../components/Post"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { down } from "styled-breakpoints"

export default () => {
  const { allBlogs } = useStaticQuery(graphql`
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
  const blogs = allBlogs.edges[0].node.blogs
  const renderMain = () => {
    return blogs.map(e => <Post {...e} key={e.id} tagList={e.tag_list} />)
  }

  return (
    <Layout>
      <title>Blogs</title>
      <Container>
        <Jumbotron>
          <HeadImage plain src={blogIcon} />
          <H1>My Blogs</H1>
        </Jumbotron>
        <StyledMain>{renderMain()}</StyledMain>
      </Container>
    </Layout>
  )
}

const StyledMain = styled(Main)`
  ${down("md")} {
    width: 98%;
  }
`
