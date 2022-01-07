import "./CreateAccountPage.css";
import "bulma/css/bulma.min.css";
import * as React from "react";
import { FunctionComponent, useState } from "react";
import { Button, Form, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";

const { Input, Field, Control, Label } = Form;

const CreateAccountPage: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="div1">
      <Heading size={2}>Create an account</Heading>
      <Field>
        <Label>Email</Label>
        <Control>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="e.g. abc@gmail.com"
            type="text"
            value={email}
          />
        </Control>
      </Field>
      <Field>
        <Label>Password</Label>
        <Control>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            type="password"
            value={password}
          />
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
