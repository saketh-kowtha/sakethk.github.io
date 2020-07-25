import React from "react"
import Layout from "../components/Layout"
import { Container, Main } from "../components"
import styled from "styled-components"
import { down } from "styled-breakpoints"
const ReactMarkdown = require("react-markdown")

export default ({ pageContext }) => {
  return (
    <Layout>
      <Main>
        <ContainerStyled>
          {pageContext.cover_image && (
            <img
              alt="cover"
              width="100%"
              height="100%"
              src={pageContext.cover_image}
            />
          )}
          <h3>{pageContext.title}</h3>
          <label>{pageContext.created_at}</label>
          <div>{pageContext.tags.join(" , ")}</div>
          <ReactMarkdown source={pageContext.body_markdown} />
        </ContainerStyled>
      </Main>
    </Layout>
  )
}

const ContainerStyled = styled(Container)`
  text-align: left;
  margin: 0 auto;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${down("md")} {
    padding: 8px;
    box-shadow: none;
  }
  pre {
    padding: 10px;
    background-color: #272822;
    color: white;
    border-radius: 8px;
    overflow: auto;
  }
`
