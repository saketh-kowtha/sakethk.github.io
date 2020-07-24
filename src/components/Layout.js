import React from "react"
import { ThemeProvider } from "styled-components"
import Footer from "../modules/Footer"
import Header from "../modules/Header"
import GlobalStyle from "../commonStyles"
import SEO from "./seo"

export const theme = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <div>
        <Header />
        <GlobalStyle />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
