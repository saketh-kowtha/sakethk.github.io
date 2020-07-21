import React from "react"
import Layout from "../components/Layout"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components"
import UnderConstruction from "../components/UnderConstruction"
import blogIcon from "../static/assets/blog.svg"

export default () => {
  return (
    <Layout>
      <Container>
        <Jumbotron>
          <HeadImage plain src={blogIcon} />
          <H1>My Blogs</H1>
        </Jumbotron>
        <Main>
          <UnderConstruction />
        </Main>
      </Container>
    </Layout>
  )
}
