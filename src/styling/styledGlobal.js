import styled, { createGlobalStyle } from "styled-components";

export const styleColours = {
  veryDark: "#7e2e84",
  quiteDark: "#d14081",
  middle: "#98c1d9",
  quiteLight: "#d2ab99",
  veryLight: "#f9f5e3",
};

export const GlobalStyle = createGlobalStyle`
 body{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${styleColours.veryLight};
  color: ${styleColours.veryDark};
  border-color: ${styleColours.veryDark};
  text-align: center;
 }
 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
hr{
  background-color: ${styleColours.veryDark};
  margin: 0px;
  border: none;
  height: 1px;
}
button{
  margin: 1px;
}

ul{
  list-style: none;
  grid-column: 2/3;
  padding-left: 0;
  margin-top: 0;
}

li{
  background-color: ${styleColours.middle};
  border: 2px solid;
  margin: 10px;
}
`;

export const StyledHeader = styled.header`
  background-color: ${styleColours.quiteDark};
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${styleColours.veryLight};
`;

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${styleColours.middle};
  padding: 1vh;
  height: 50px;
  overflow-y: visible;
  border: 2px solid;
`;

//Why do we need to define the background here?  Shouldn't it inherit global? (it doesn't, it goes transparent...)
export const StyledLogin = styled.section`
  padding: 5px;
  position: sticky;
  top: 73px;
  overflow-y: visible;
  border: 2px solid;
  border-top: 0;
  background: ${styleColours.veryLight};
`;

//The below is used for homepage, loader, error page
export const StyledSection = styled.section`
  border: 2px solid;
  margin-top: -2px;
`;
