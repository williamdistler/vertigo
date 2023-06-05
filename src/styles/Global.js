import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothin: antialised;
    font-family: 'Titillium Web', sans-serif;
  }

  body {
    background: #F8FAFC;
  }
`