import styled from "styled-components"
import { down } from "styled-breakpoints"

const Main = styled.main`
  width: 50%;
  ${down("md")} {
    width: 85%;
  }
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 50px;
  color: #2e2e2e;
  text-align: left;
  line-height: 1.5rem;
`

export default Main
