import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

    let getLocalUserData = localStorage.getItem("username");
    let getLocalPassData = localStorage.getItem("password");


  const handleSignin = (e) => {
    e.preventDefault();
    const usernameValidation = user.trim() === '' || user.length < 8 ? <p style={{ color: "red" }}>enter valid username</p> : '';
    const passwordValidation = pass.trim() === '' || pass.length < 8 ? <p style={{ color: "red" }}>
      enter valid password </p> : '';

    setErrors({
      username: usernameValidation,
      password: passwordValidation,
    });

    if (!usernameValidation && !passwordValidation && getLocalUserData === user && getLocalPassData === pass) {
      alert("Logged-in Successfully");
      navigate("/home");
    }
    else if (usernameValidation && passwordValidation) {
      alert("inputs cannot be empty")
    }
    else {
      alert("Login failed!!Please Check the details");
    }
  };

  const handleErrorofUserInput = (e) => {
    let userValue = e.target.value;
    userValue = userValue.toLowerCase();
    setUser(userValue);
    const nameData = userValue.trim() === ''? <p style={{ color: "red" }}>enter valid username</p> : ''
    setErrors({
      ...errors,
      username: nameData,
    });
  };

  const handleErrorofPassInput = (e) => {
    let passValue = e.target.value;
    setPass(passValue);
    const passData = passValue.trim() === ""? <p style={{ color: "red" }}> enter valid password</p> : '';
    setErrors({
      ...errors,
      password: passData,
    });
  };


  return (
    <form className="loginform-container">
      <div className="login-container">
        <div className="login-heading">
          <h3>Login</h3>
        </div>
        <div>
          <div className="field">
            <label>Username</label>
            <input type="text" id="username" className="username" value={user} onChange={handleErrorofUserInput} />
            {
              errors.username ? <span style={{ visibility: "visible" }}>{errors.username}</span> : ''
            }
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" id="password" className="password" value={pass} onChange={handleErrorofPassInput} />
            {
              errors.password ? <span style={{ visibility: "visible" }}>{errors.password}</span> : ''
            }
          </div>
          <button className="login-btn" onClick={handleSignin}> Login</button>
          <p className="forgot-password"><Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          </p>
          <p className="final-text">Don't have account yet?<Link to="/register" className="register-link">Register
          </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;

