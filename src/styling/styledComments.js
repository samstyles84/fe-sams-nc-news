import { styleColours } from "./styledGlobal";
import styled from "styled-components";

export const StyledCommentsContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(5px, auto) minmax(270px, 500px) minmax(
      5px,
      auto
    );
  border: 2px solid;
  margin-top: 10px;
  grid-column: 2/3;
  margin-bottom: 10px;
  padding: 5px;

  div {
    grid-column: 2/3;
    margin-top: 10px;
  }

  textarea {
    resize: none;
    margin: 5px;
    font-family: inherit;
  }
`;

export const StyledCommentCard = styled.section`
  background-color: ${styleColours.veryLight};
  margin: 0;
  padding: 10px;
  text-align: left;
`;
