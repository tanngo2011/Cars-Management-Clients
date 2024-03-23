import React from "react";
import CarContainer from "../containers/CarContainer";
import { Container } from "reactstrap";

function CarPage(props) {
  return (
    <div>
      <Container>
        <h1>CAR MANAGEMENT</h1>
        <br/>
        <CarContainer />
      </Container>
    </div>
  );
}

export default CarPage;
