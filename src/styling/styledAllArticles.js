import { styleColours } from "./styledGlobal";
import styled from "styled-components";

export const StyledArticlesContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(10px, auto) minmax(300px, 500px) minmax(
      10px,
      auto
    );
  border: 2px solid;
  border-top: 0;
`;

export const StyledArticleCard = styled.li`
  background-color: ${styleColours.middle};
  border: 2px solid;
  margin: 10px;
`;

export const StyledSortBar = styled.div`
  padding: 10px;
  background-color: ${styleColours.middle};
  position: sticky;
  top: 126px;
  overflow-y: visible;
  border: 2px solid;
  border-top: 0;

  span {
    color: ${styleColours.quiteDark};
  }
`;

export const StyledSortButton = styled.button`
  ${(props) => {
    if (props.selected) {
      return `background: ${styleColours.quiteDark}`;
    }
  }};
  margin-left: 10px;
`;
