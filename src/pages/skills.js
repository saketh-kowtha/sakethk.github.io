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
const skills = {
  "C/C++":
    "I've used these languages when I was learning Data Structures and programming. After moving to high-level languages, I didn't show interest to work on these. But if I want to write an algorithm from the scratch, I will still prefer these languages and use GCC compiler for C/C++.",
  Java:
    "It taught me Object-oriented programming. I've learned Core java and my first Linked List program was written using this. I haven't worked with big libraries and frameworks in Java but I have little hands-on experience in Struts 1.X, JSP, JDBC, and JavaFX.",
  Python:
    "It is one of my favorite programming languages, because it is a High-level programming language 😉. It helped me a lot when I was struggling to code. I've learned many programming concepts from Python and now I'm using it to learn ML basics and Data Science. I have good experience with the Pandas library which is used for Data Science. I have some real time experience with Python and I've build a Data cleaning tool with Invalid addresses correction using Google Maps API.",
  Javascript:
    "Javascript is my all time favorite language. I didn't know exactly what we can do with JS until my 6th semester. I've started using this language from my 7th semester and since then whenever I work with JS it gives confidence for me. I have learned Angular 1.x, Basics of React, ES-6, Ramada JS, and Advance JS. I have good real-time experience with Javascript and its frameworks (Angular, React).",
  "Node js":
    "It is a member of the Javascript family used on the server side. I've learned Nodejs along with Javascript in my 7th semester. I have good real-time experience with NodeJS and ExpressJS.",
  AWS:
    "I've had basic hands-on experience with AWS and I worked with S3, EC2, IAM and DynamoDb.",
  "Query Languages":
    "I've learned MySQL and MongoDB for Web apps and have real time experience with CRUD operations.",
  OS:
    "I have a sound knowledge on Windows 7/10, Linux(Ubuntu/Fedora/CentOS) and OS X",
  ML:
    "I have basic knowledge in ML, Data science and NLP. Maximum time i am spending on those technologies to learn.",
}

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
          {Object.keys(skills).map(e => (
            <DataCard title={e} text={skills[e]} />
          ))}
        </Main>
      </Container>
    </Layout>
  )
}
