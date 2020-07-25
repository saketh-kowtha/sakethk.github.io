import { createGlobalStyle } from "styled-components"
import { down } from "styled-breakpoints"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  html {
    position: relative;
    min-height: 100%;
    ${down("md")}{
      font-size: 14px;
    }
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat',Helvetica neue,Helvetica,Arial,sans-serif;
  }
`

export default GlobalStyle
