import React from "react";
import { StyledSection } from "../styling/styledGlobal";

const ErrorPage = ({ msg, status }) => {
  return (
    <StyledSection className="ErrorPage">
      <h3>Sorry!</h3>
      <p>
        An error has occurred with status {status}: {msg}
      </p>
    </StyledSection>
  );
};

export default ErrorPage;
