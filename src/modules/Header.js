import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

export default () => {
  const navLinks = [
    { label: "About", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Videos", path: "/videos" },
  ]
  return (
    <Header>
      <NavLeftSection>
        <Title>Kowtha Saketh</Title>
      </NavLeftSection>
      <NavRightSection>
        {navLinks.map(({ label, path }) => (
          <NavLink activeStyle={{ color: "#0096cc" }} key={label} to={path}>
            {label}
          </NavLink>
        ))}
      </NavRightSection>
    </Header>
  )
}

const Header = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

const NavLeftSection = styled.div`
  padding: 0 20px;
`

const NavRightSection = styled.div`
  padding: 0 20px;
`

const NavLink = styled(Link)`
  color: #2e2e2e;
  margin: 0 16px;
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  text-decoration: none;
  :hover,
  :active {
    color: #0096cc;
  }
`

const Title = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #2e2e2e;
  margin: 16px;
  :hover {
  }
`
