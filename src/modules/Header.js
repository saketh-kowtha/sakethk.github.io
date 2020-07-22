import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { up, down } from "styled-breakpoints"

export default () => {
  const navLinks = [
    { label: "About", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Videos", path: "/videos" },
  ]

  const [toggle, setToggle] = useState(false)

  return (
    <Header>
      <NavSection desktop>
        <Title>Kowtha Saketh</Title>
      </NavSection>
      <Toggle onClick={() => setToggle(!toggle)}>OPEN</Toggle>
      <NavSection toggle={toggle}>
        {navLinks.map(({ label, path }) => (
          <NavLink activeStyle={{ color: "#0096cc" }} key={label} to={path}>
            {label}
          </NavLink>
        ))}
      </NavSection>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  ${up("sm")} {
    align-items: center;
    justify-content: space-between;
  }
  ${down("md")} {
    flex-direction: column;
  }
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

const NavSection = styled.div`
  padding: 0 20px;
  ${down("sm")} {
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    ${props =>
      !props.toggle &&
      !props.desktop &&
      css`
        display: none;
      `}
    padding: 0;
    transition: 0.5s;
  }
`

const NavLink = styled(Link)`
  color: #2e2e2e;
  ${down("sm")} {
    display: block;
  }
  margin: 0 16px;
  ${down("sm")} {
    margin: 10px;
  }
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
  margin-right: 0;
  ${down("sm")} {
    margin: 10px;
  }
`

const Toggle = styled.span`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  ${down("md")} {
    display: block;
  }
`
