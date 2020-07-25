import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { down } from "styled-breakpoints"

export default () => {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/saketh_kowtha",
    },
    {
      name: "Github",
      href: "https://github.com/saketh-kowtha",
    },
    {
      name: "DevTo",
      href: "https://dev.to/sakethkowtha",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saketh-kowtha/",
    },
  ]
  return (
    <Footer>
      <div>Developed by Kowtha Saketh</div>
      <div>
        {socialLinks.map(({ name, href }) => (
          <StyledLink to={href}>{name}</StyledLink>
        ))}
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
  position: absolute;
  color: grey;
  font-size: 0.875rem;
  background-color: white;
  padding: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  ${down("md")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.125);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;

  div {
    ${down("md")} {
      display: flex;
    }
  }

  div:first-child {
    display: none;
  }
`

const StyledLink = styled(Link)`
  margin: 0 8px;
  color: #3a4145;
  text-decoration: none;
  letter-spacing: 0.05rem;
  ${down("md")} {
    margin: 0 18px;
  }
`
