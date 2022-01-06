import "./CreateAccountPage.css";
import "bulma/css/bulma.min.css";
import * as React from "react";
import { FunctionComponent } from "react";
import { Button, Form, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";

const { Input, Field, Control, Label } = Form;

const CreateAccountPage: FunctionComponent = () => {
  return (
    <div className="div1">
      <Heading size={2}>Create an account</Heading>
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

      <Button>Create account</Button>

      <p className="create-account-link">
        <Link to="/">Log in</Link>
      </p>
    </div>
  );
};

export default CreateAccountPage;
