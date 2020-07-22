import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components"

export default ({ pageContext }) => {
  return (
    <Layout>
      <Container>
        {pageContext.cover_image && (
          <img alt="cover" src={pageContext.cover_image} />
        )}
        <h3>{pageContext.title}</h3>
        <label>{pageContext.created_at}</label>
        <div>{pageContext.tags.join(" , ")}</div>
        <div dangerouslySetInnerHTML={{ __html: pageContext.body_html }} />
      </Container>
    </Layout>
  )
}
