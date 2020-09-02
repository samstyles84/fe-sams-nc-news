import React from "react";

const ErrorPage = ({ msg, status }) => {
  return (
    <p>
      An error has occurred with status: {status}. The response says {msg}
    </p>
  );
};

export default ErrorPage;
