import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  // useref
  const emailRef = useRef(""); // string value empty thakbe
  const passwordRef = useRef("");
  const navigate = useNavigate();

  // jodi user registered hy then sign in/ login korbe

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // if user created
  if (user) {
    navigate("/home");
  }

  // handle submit
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateToRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container w-50 mx-auto py-2">
      <h2 className="text-center text-primary"> Please Login</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to Genius Car ?
        <Link
          to="/register"
          onClick={navigateToRegister}
          className="text-danger px-3 fw-bold pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
