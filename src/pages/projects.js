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
import projectsIcon from "../static/assets/project.svg"
const gitHubUrl = "https://github.com/saketh-kowtha/"
const skills = {
  "Tic-Tac-Toe": {
    description:
      "Developed a Tic-Tac-Toe Game using ​C​​ with ​graphic.h​​ library.",
    link: "/Tic-Tac-Toe",
  },
  "Speech To Text": {
    description:
      "Developed a Speech-To-Text Application Using ​C#​​ SpeechSynthesizer class. It takes a file as an input and gives the output in the form of audio as well as a WAV file (audio file). Inspired from IRON MAN (JARVIS).",
    link: "/filereader",
  },
  "Smart Light": {
    description:
      "Using ​Arduino ​​Microcontroller, ​Embedded C​​ and ​Python​​ Programming, I have developed a Smart Light IOT Application.",
  },
  "Cricket Card": {
    description:
      "It is an Angularjs Application for calculating and maintaining game score User has to Enter Team and Players details first. For every ball it takes user input and based on that it will update the score card. This application makes street cricket more interesting by providing score card.",
    link: "/cricket",
  },
  Attendance: {
    description:
      "It will generate the Consolidated Student Attendance report of the selected student from XLSX file. It is developed using Node Js and Electron Js. It is created for NRI college TNP department.",
    link: "/Attendance",
  },
  CompileS: {
    description:
      "It is a Node JS application which compiles the user code from Browser. It also takes program inputs from the browser and displays the output. Users can also execute code from GitHub and Gist without downloading. Inspired from HackerEarth and HackerRank.",
    link: "/compiles",
  },
  "Sentiment Analysis Chat application": {
    description:
      "Realtime chatting application with Sentiment analysis. Developed using MERN stack, Socket.io and IBM tone analyser.",
    link: "/Chat",
  },
  "Sticky Pad (Chrome Extension)": {
    description:
      "Basic Notes user can add images, links to notes and able to export as PDF or can send a mail.",
    link: "/Sticky-Pad",
  },
  "Magic Dictionary": {
    description:
      "Dictionary application shows the Definition, Synonym, Antonym and Examples for a given word.",
  },
}

export default () => {
  return (
    <Layout>
      <title>Projects</title>
      <Container>
        <Jumbotron>
          <HeadImage plain src={projectsIcon} />
          <H1>My Projects</H1>
        </Jumbotron>
        <Main>
          {Object.keys(skills).map(e => (
            <DataCard
              key={e}
              more={skills[e].link && gitHubUrl + skills[e].link}
              title={e}
              text={skills[e].description}
            />
          ))}
        </Main>
      </Container>
    </Layout>
  )
}
