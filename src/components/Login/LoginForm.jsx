import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function LoginForm(props) {

  let { handleLogin } = props;

  let [username, setUsername] = useState("");

  let [password, setPassword] = useState("");



  let handleUsername = (event_param) => {
    let value = event_param.target.value;
    setUsername(value);
  }


  let handlePassword = (event_param) => {
    let value = event_param.target.value;
    setPassword(value);
  }

  let logData = () => {
    let data = {
        username: username,
        password: password
    }

    handleLogin(data);
  }

 
  return (
    <>
      <div id="login-form">
        <div id="login-item">
          <Form>
            <FormGroup>
              <Label for="exampleUsername">Email</Label>
              <Input
                id="exampleUsername"
                name="username"
                placeholder="Nhập vào Username..."
                type="text"
                onChange={(event) => handleUsername(event)}
              />
            </FormGroup>

            <br />
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Nhập vào Password..."
                type="password"
                autoComplete=""
                onChange={(event) => handlePassword(event)}
              />
            </FormGroup>

            <br />
            <br />
            <Button color="primary" onClick={logData}>
              LOG IN
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
