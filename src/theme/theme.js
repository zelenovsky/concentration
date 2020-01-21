import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');

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
    font-family: 'Bangers', cursive;
    letter-spacing: 2px;
  }
  
  body {
    margin: 0;
  }
`;

export default {
  colors: {
    black: '#222',
    white: '#fff'
  },
  space: ['0', '4px', '1rem', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  sizes: ['544px', '80rem', '1012px', '1280px'],
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  radii: ['0', '3px', '6px'],
}
