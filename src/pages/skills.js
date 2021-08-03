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
//           {Object.keys(skills).map(e => (
//             <DataCard title={e} text={skills[e]} />
//           ))}
            <h2 data-sourcepos="7:1-7:18">Experienced in</h2>
<ul data-sourcepos="8:1-22:7">
    <li data-sourcepos="8:1-8:10">Reactjs</li>
    <li data-sourcepos="9:1-9:9">Nodejs</li>
    <li data-sourcepos="10:1-10:10">Express</li>
    <li data-sourcepos="11:1-11:9">Nextjs</li>
    <li data-sourcepos="12:1-12:9">Gatsby</li>
    <li data-sourcepos="13:1-13:14">React-redux</li>
    <li data-sourcepos="14:1-14:13">Javascript</li>
    <li data-sourcepos="15:1-15:9">Jquery</li>
    <li data-sourcepos="16:1-16:10">Ramdajs</li>
    <li data-sourcepos="17:1-17:9">Python</li>
    <li data-sourcepos="18:1-18:7">Dart</li>
    <li data-sourcepos="19:1-19:10">Mongodb</li>
    <li data-sourcepos="20:1-20:9">Docker</li>
    <li data-sourcepos="21:1-21:5">K8</li>
    <li data-sourcepos="22:1-22:7">Jest</li>
</ul>
<h2 data-sourcepos="24:1-24:21">I'm Interested in</h2>
<ul data-sourcepos="25:1-31:6">
    <li data-sourcepos="25:1-25:43">Lambda Calculus and Discrete Mathematics</li>
    <li data-sourcepos="26:1-26:13">Algorithms</li>
    <li data-sourcepos="27:1-27:25">Functional programming</li>
    <li data-sourcepos="28:1-28:66">Javascript (Node, Angularjs, React ...) / Functional Javascript</li>
    <li data-sourcepos="29:1-29:8">Scala</li>
    <li data-sourcepos="30:1-30:9">Python</li>
    <li data-sourcepos="31:1-31:6">K8s</li>
</ul>
<h2 data-sourcepos="33:1-33:25">Things I find amusing</h2>
<ul data-sourcepos="35:1-37:19">
    <li data-sourcepos="35:1-35:55">Learning New Technologies and Programming languages.</li>
    <li data-sourcepos="36:1-36:33">Browsing open source projects.</li>
    <li data-sourcepos="37:1-37:19">Surfing the Web.</li>
</ul>
        </Main>
      </Container>
    </Layout>
  )
}
