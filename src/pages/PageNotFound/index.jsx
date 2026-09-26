import React from "react";

import {
  StyledStatusAction,
  StyledStatusMessage,
} from "../../elements/StatusMessage/StatusMessage.Styled";

import StyledNotFoundPage from "./PageNotFound.Styled";

const PageNotFound = () => {
  return (
    <StyledNotFoundPage>
      <StyledStatusMessage className="status-empty">
        <p className="status-code">404</p>
        <h1>Page not found</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <StyledStatusAction to="/">Back to recipes</StyledStatusAction>
      </StyledStatusMessage>
    </StyledNotFoundPage>
  );
};

export default PageNotFound;
