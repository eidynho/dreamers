import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121214;
    color: #FFF;
    font-family: ${props => props.theme.fontPrimary};
    transition: all 0.4s ease;
    overflow: overlay;
  }

  ::selection {
    background-color: #E05263;
  }

  ::-webkit-scrollbar {
    width: 0.6em;
    height: 0.6em;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 99px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`