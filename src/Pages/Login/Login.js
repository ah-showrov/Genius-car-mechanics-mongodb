import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>Please Login </h2>
      <Button onClick={signInUsingGoogle}> Google Sign in </Button>
    </div>
  );
};

export default Login;
