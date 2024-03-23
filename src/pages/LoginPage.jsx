import React from "react";
import { Container } from "reactstrap";
import LoginFormContainer from "../containers/LoginContainer";

function LoginPage(props) {
  return (
    <Container>
      {/* <h1>THIS IS LOGIN PAGE</h1> */}
      <LoginFormContainer />
    </Container>
  );
}

export default LoginPage;
