import React, { useState } from "react"
import Layout from "../components/Layout"
import { Container, Jumbotron, Main, H1, HeadImage } from "../components"
import UnderConstruction from "../components/UnderConstruction"
import blogIcon from "../static/assets/blog.svg"
import Post from "./Post"
// import { useQueryParam } from "use-query-params";

export default () => {
  const [apiResponse, setApiResponse] = useState({ loading: true })
  if (apiResponse.loading)
    fetch("http://142.93.223.198:8080/api/getAllArticles/")
      .then(data => data.json())
      .then(response => {
        setApiResponse({ loading: false, data: response.data })
      })
      .catch(error => {
        setApiResponse({ loading: false, error: true })
      })

  const renderMain = () => {
    if (apiResponse.loading) return
    return apiResponse.data.map(e => <Post {...e} />)
  }

  return (
    <Layout>
      <Container>
        <Jumbotron>
          <HeadImage plain src={blogIcon} />
          <H1>My Blogs</H1>
        </Jumbotron>
        <Main>{renderMain()}</Main>
      </Container>
    </Layout>
  )
}
