import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components/"
import MyImage from "../static/assets/me.jpeg"

export default () => {
  return (
    <Layout>
      <Container>
        <Jumbotron>
          <HeadImage src={MyImage} />
          <H1>Kowtha Saketh</H1>
          <Label>Fullstack developer</Label>
        </Jumbotron>
        <MainStyled>
          <H2>About me</H2>
          <Text>
            Kowtha Saketh currently working as a UI Dev @Thoughtworks. He is
            Computer jock, Programmer, Technology enthusiast, Gamer, Blogger and
            Math ❤️ er.
          </Text>
        </MainStyled>
      </Container>
    </Layout>
  )
}

const H2 = styled.h2`
  color: #3a4145;
`
const Label = styled.label`
  font-size: 1.2rem;
  color: #0096cc;
`

const MainStyled = styled(Main)`
  width: 40%;
`

const Text = styled.p`
  text-align: left;
`
