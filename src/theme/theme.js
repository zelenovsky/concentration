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
    letter-spacing: 0.2em;
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
  fontSizes: ['0.5rem', '1rem', '2rem', '3rem', '4rem', '5rem', '6rem', '7rem', '8rem'],
  space: ['0', '0.4rem', '0.8rem', '1.2rem', '1.6rem', '2rem', '2.4rem', '2.8rem', '3.2rem'],
  sizes: ['20rem', '40rem', '60rem', '80rem'],
  breakpoints: ['40rem'],
  radii: ['0', '0.2rem', '0.4rem', '0.6rem'],
}
