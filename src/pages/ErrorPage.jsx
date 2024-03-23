import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

function ErrorPage(props) {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>OOPS!!! PAGE NOT FOUND</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={"/"}>
          <Button color="success">Back to Homepage</Button>
        </Link>
      </div>
    </Container>
  );
}

export default ErrorPage;
