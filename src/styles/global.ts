import { createGlobalStyle } from "styled-components";
import { primaryWhite } from "./colors";

const GlobalStyle = createGlobalStyle`  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%; // 1 rem = 10px
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  button {
    cursor: pointer;
  }
  
  body {
    background-color: ${primaryWhite};
    font-family: 'Inter', sans-serif;
    user-select: none;
  }
;`;

export default GlobalStyle;
