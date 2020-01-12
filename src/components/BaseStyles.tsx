import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100vh;
  }
  
  html {
    font-size: 1vh;
  }
  
  body {
    margin: 0;
  }
`;

export default BaseStyles;