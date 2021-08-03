import React from "react"
import Layout from "../components/Layout"
import {
  DataCard,
  Container,
  Main,
  Jumbotron,
  H1,
  HeadImage,
} from "../components"
import skillsIcon from "../static/assets/skills.svg"

export default () => {
  return (
    <Layout>
      <title>Skills</title>
      <Container>
        <Jumbotron>
          <HeadImage plain src={skillsIcon} />
          <H1>My Skills</H1>
        </Jumbotron>
        <Main>
          <h2>Experienced in</h2>
          <ul>
            <li>Reactjs</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>Nextjs</li>
            <li>Gatsby</li>
            <li>React-redux</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>Ramdajs</li>
            <li>Python</li>
            <li>Dart</li>
            <li>Mongodb</li>
            <li>Docker</li>
            <li>K8</li>
            <li>Jest</li>
          </ul>
          <h2>I'm Interested in</h2>
          <ul>
            <li>Lambda Calculus and Discrete Mathematics</li>
            <li>Algorithms</li>
            <li>Functional programming</li>
            <li>
              Javascript (Node, Angularjs, React ...) / Functional Javascript
            </li>
            <li>Scala</li>
            <li>Python</li>
            <li>K8s</li>
          </ul>
          <h2>Things I find amusing</h2>
          <ul>
            <li>Learning New Technologies and Programming languages.</li>
            <li>Browsing open source projects.</li>
            <li>Surfing the Web.</li>
          </ul>
        </Main>
      </Container>
    </Layout>
  )
}
