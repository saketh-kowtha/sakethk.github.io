import React from "react"
import styled from "styled-components"
import Footer from "../modules/Footer"
import Header from "../modules/Header"
import GlobalStyle from "../commonStyles"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <GlobalStyle />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
