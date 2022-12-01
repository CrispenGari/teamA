import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form className="login__card" onSubmit={onSubmit}>
        <img alt="logo" src="/logo.png" />
        <h1>
          <span>LOGIN</span> <span></span>
        </h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
          type={"email"}
        />
        <input
          placeholder="password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p>{error}</p>
        <button type="submit">LOGIN</button>
        <h1>
          <span>{"I'm a new user?"}</span> <span></span>
        </h1>
        <button
          type="button"
          onClick={() => {
            navigate("/register", { replace: false });
          }}
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Login;
