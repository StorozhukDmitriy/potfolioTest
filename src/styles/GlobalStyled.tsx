import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body{
        margin: 0;
        font-family:"Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${Theme.colors.font};
        line-height: 1.2;
 
      }
      a{
        text-decoration: none;
        color: ${Theme.colors.font};
      }
      ul{
        list-style: none;
      }
      
      button { 
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.font};
      }
      section {
        padding: 100px 0;
        @media ${Theme.media.mobile} {
        padding: 80px 0;
      }
      }
      section:nth-of-type(odd){
        background-color:${Theme.colors.primaryBg}
      }
      section:nth-of-type(even){
        background-color:${Theme.colors.secondaryBg}
      }
      
      body:last-child {
        background-color:${Theme.colors.primaryBg}
      }

      p{
        font-weight: 400;
        font-size: 16px;
        line-height: 1.4;
      }
      
`;
