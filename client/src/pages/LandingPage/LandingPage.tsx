import "./LandingPage.css";
import "bulma/css/bulma.min.css";
import * as React from "react";
import { FunctionComponent } from "react";
import { Button, Form, Heading } from "react-bulma-components";

const { Input, Field, Control, Label } = Form;

const LandingPage: FunctionComponent = () => {
  return (
    <div className="div1">
      <Heading size={1}>BlogChat</Heading>
      <div className="login">
        <Field>
          <Label>Username</Label>
          <Control>
            <Input placeholder="e.g. John Doe" type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Password</Label>
          <Control>
            <Input placeholder="password" type="password" />
          </Control>
        </Field>

        <Button>Log in</Button>
      </div>
    </div>
  );
};

export default LandingPage;
