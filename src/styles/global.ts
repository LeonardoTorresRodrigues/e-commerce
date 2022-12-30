import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f6f6f6;
    font-size: 14px;
    color: black;
    font-family: sans-serif;
  }
`;