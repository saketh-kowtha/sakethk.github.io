import React from "react"
import Layout from "../components/Layout"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components"
import UnderConstruction from "../components/UnderConstruction"
import youtubeIcon from "../static/assets/youtube.svg"
export default () => {
  return (
    <Layout>
      <title>Videos</title>
      <Container>
        <Jumbotron>
          <HeadImage plain src={youtubeIcon} />
          <H1>My Videos</H1>
        </Jumbotron>
        <Main>
          <UnderConstruction />
        </Main>
      </Container>
    </Layout>
  )
}
