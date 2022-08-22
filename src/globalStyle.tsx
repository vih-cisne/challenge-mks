import { createGlobalStyle, css } from 'styled-components';

interface IGlobalProps {
  theme:string
}
 
const GlobalStyle = createGlobalStyle`

:root{
        ${(props: IGlobalProps) => {
          return (
            props.theme === "light" &&
            css`
              --primary-color: #0F52BA;
              --black: #000000;
              --grey-0: #2C2C2C;
              --grey-1: #373737;
              --grey-2:#EEEEEE;

              --white-0: #fff;
              --white-1: #0e4166;
              --background: #E5E5E5;
            `
          );
        }}

${(props) => {
          return (
            props.theme === "dark" &&
            css`
              --primary-color: #0F52BA;
              --black: #000000;
              --grey-0: #2C2C2C;
              --grey-1: #373737;
              --grey-2:#EEEEEE;
              --grey-yellow: #baae9c;

              --white-0: #fff;
              --white-1: #0e4166;
              
              --background: #14171a;
            `
          );
        }}
    }

  * {
    box-sizing: border-box;
    text-align: center;
    margin: 0;
    padding: 0;

  }
  body {
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background: var(--background);
    //padding: 0 5vw;
    //font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }
  button {
    cursor: pointer;
  }

  button:hover {
    filter: brightness(120%)
  }
  /*h5 {
    width: fit-content;
  }
  ul {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  li {
      list-style: none;
  }

  button {
      cursor: pointer;
  }

  main {
    margin-top: 100px;
    
  }

  header {
    padding: 0 8vw;
  }

  button:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 425px) {
      body {
        padding: 0 0.5rem;
      }
        
    }*/
`;
 
export default GlobalStyle;