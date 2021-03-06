import React from "react"
import Layout from "../components/Layout"
import { Container, Main } from "../components"
import notFound from "../static/assets/404.svg"
import styled from "styled-components"

export default () => {
  return (
    <Layout>
      <title>Not Found</title>
      <Container>
        <Main>
          <center>
            <NotFoundImage src={notFound} />
            <br />
            <br />
            <br />
            Something Wrong
          </center>
        </Main>
      </Container>
    </Layout>
  )
}

const NotFoundImage = styled.img`
  margin-top: 50px;
  width: 300px;
`
