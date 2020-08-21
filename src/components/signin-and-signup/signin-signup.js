import React from "react";

import "./signin-signup.scss";
import Signin from "../signin/signin";
import Signup from "../signup/signup";

function SignInSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
}

export default SignInSignUp;
