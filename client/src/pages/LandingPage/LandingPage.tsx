import "bulma/css/bulma.min.css";
import * as React from "react";
import { FunctionComponent } from "react";
import { Button, Container, Heading } from "react-bulma-components";

const LandingPage: FunctionComponent = () => {
  return (
    <Container>
      <Heading size={1}>BlogChat</Heading>
      <Button>hi</Button>
    </Container>
  );
};

export default LandingPage;
