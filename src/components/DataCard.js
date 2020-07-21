import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default ({ title, text, more }) => {
  return (
    <div>
      <Label>{title}</Label>
      <Text>
        {text}
        {more && <MoreBtn to={more}></MoreBtn>}
      </Text>
    </div>
  )
}

const Label = styled.label`
  font-weight: bold;
  color: #0096cc;
  font-size: 18px;
  padding-bottom: 5px;
`

const Text = styled.p`
  line-height: 1.6rem;
  letter-spacing: 0.05rem;
  padding-left: 1rem;
  font-size: 18px;
  text-align: left;
  color: grey;
`

const MoreBtn = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: grey;
  font-size: 12px;
  display: block;
  margin-top: 10px;
  :after {
    content: "Continue Reading \u00BB";
  }
`
