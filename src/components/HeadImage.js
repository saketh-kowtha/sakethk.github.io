import styled, { css } from "styled-components"

const Image = styled.img`
  height: 180px;
  width: 180px;
  ${props =>
    !props.plain &&
    css`
      border-radius: 50%;
      height: 120px;
      width: 120px;
      filter: grayscale(1);
      border: 10px solid white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.125);
    `}
  transition: 0.3s;
`

export default Image
