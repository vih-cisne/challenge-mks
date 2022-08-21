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

              --secondary-color: #ffb886;

              --white-0: #fff;
              --background: #E5E5E5;
              --invert: black;
            `
          );
        }}

${(props) => {
          return (
            props.theme === "dark" &&
            css`
              --primary-color: #0F52BA;
              --secondary-color: #ffb886;

              --filter-color: #ffb162;
              --hover-color: #ff6b09;

              --black: #000000;
              --grey-0: #2C2C2C;
              --grey-1: #373737;
              --grey-2:#EEEEEE;
              --grey-yellow: #baae9c;

              --white-0: #fff;
              
              --background: #1e1a17;
              --invert: #fff;
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