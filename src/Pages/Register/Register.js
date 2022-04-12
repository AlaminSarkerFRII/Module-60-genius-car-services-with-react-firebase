import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateToLogin = (event) => {
    navigate("/login");
  };

  // handle register form
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register-form">
      <h2 className="text-center py-3">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="enter your email" required />
        <input type="password" placeholder="password" required />
        <input className="bg-info" type="submit" value="Register" />
      </form>
      <p>
        New to Genius Car ?
        <Link
          to="/login"
          onClick={navigateToLogin}
          className="text-danger px-3 fw-bold pe-auto text-decoration-none"
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
