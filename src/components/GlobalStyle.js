import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #acc2e6;
    font-family: 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color:  #06347d;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  button {
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    border-style: outset;
    color: inherit;
  }
  input {
    width: 70%;
    padding: 5px;
    outline: transparent;
    border: 1px solid #2160c4;
    border-radius: 4px;
    color: inherit
  }
`;

export default GlobalStyle;
