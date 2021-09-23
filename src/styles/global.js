import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #ffffff;
    color: #084154;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
