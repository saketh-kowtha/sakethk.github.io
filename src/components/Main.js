import styled from "styled-components"
import { down } from "styled-breakpoints"

const Main = styled.main`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 20px;
  ${down("md")} {
    width: 97%;
    padding: 4px;
  }
  padding-bottom: 50px;
  color: #2e2e2e;
  text-align: left;
  line-height: 1.5rem;
`

export default Main
