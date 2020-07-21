import React from "react"
import underCons from "../static/assets/undraw_under_construction.svg"
import styled from "styled-components"

export default () => {
  return (
    <ImageWrapper>
      <ImageIcon src={underCons} />
      <Label>Under Construction</Label>
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Label = styled.h2`
  color: grey;
  font-weight: 400;
  letter-spacing: 0.5rem;
`

const ImageIcon = styled.img`
  width: 400px;
  height: 400px;
`
