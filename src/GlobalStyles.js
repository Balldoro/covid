import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  #root {
    display:flex;
    min-height: 100vh;
    background-color: #272727;
  }
  `;

export const Wrapper = styled.div`
  width: 100%;
`;
