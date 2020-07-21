import React from "react"
import styled from "styled-components"

export default () => {
  return (
    <Footer>
      <div>© 2020 Kowtha Saketh.</div>
      <div>Contact</div>
    </Footer>
  )
}

const Footer = styled.footer`
  position: absolute;
  color: grey;
  font-size: 14px;
  background-color: white;
  padding: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.125);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`
