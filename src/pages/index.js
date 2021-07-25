import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components/"
import MyImage from "../static/assets/me.jpeg"

export default () => {
  return (
    <Layout>
      <title>About Me</title>
      <Container>
        <Jumbotron>
          <HeadImage src={MyImage} />
          <H1>
            <GreyText>K</GreyText>owtha <GreyText>S</GreyText>aketh
          </H1>
          <Label>Fullstack developer</Label>
        </Jumbotron>
        <MainStyled>
          <H2>About me</H2>
          <Text>
            I am Javascript developer focuses on frontend technologies such as
            HTML, CSS, React, Gatsby, Nextjs, Angular, Webpack, Parcel and
            Redux, I have a passion for Design systems with Web accessibility,
            Microfrontends and Serverless such as AWS and GCP. I had an
            experience with Agile and TDD (Test driven development).
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

const GreyText = styled.label`
  color: hsla(202, 9%, 25%, 0.8);
`

const Text = styled.p`
  text-align: left;
`
