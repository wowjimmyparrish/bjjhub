import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login login-page">
      <h1 className="text-center mb-5 text-white d-flex justify-content-start ms-3 pt-3 ">
        BJJHub
      </h1>
      {showLogin ? (
        <>
          <LoginForm />
          <p className="text-center mt-4 text-white mt-3">
            Don't have an account?
            <button
              className="btn btn-danger ms-2"
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p className="text-center mt-4 text-white">
            Already have an account?
            <button
              className="btn btn-danger ms-2"
              onClick={() => setShowLogin(true)}
            >
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
