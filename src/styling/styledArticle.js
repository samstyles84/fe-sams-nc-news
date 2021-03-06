import { styleColours } from "./styledGlobal";
import styled from "styled-components";

export const StyledArticleContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(10px, auto) minmax(300px, 500px) minmax(
      10px,
      auto
    );
  border: 2px solid;
  border-top: 0;
`;

export const StyledSingleArticle = styled.section`
  grid-column: 2/3;
  background-color: ${styleColours.middle};
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid;

  p {
    background-color: ${styleColours.veryLight};
    margin: 0;
    padding: 10px;
    text-align: left;
    font-size: larger;
  }
`;

export const StyledVotingBar = styled.section`
  display: grid;
  grid-template-columns:
    minmax(10px, auto) minmax(80px, auto) minmax(80px, 300px) minmax(80px, auto)
    minmax(10px, auto);
  margin: 10px;
`;
