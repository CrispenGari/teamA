import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components";

import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [conf, setConf] = useState("");
  const navigate = useNavigate();
  const [l, setLoading] = useState(true);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (conf !== password) {
      setError("The two passwords must match.");
      setPassword("");
      setConf("");
      return;
    }
  };

  if (l) {
    return <Loading />;
  }

  return (
    <div className="register">
      {l && <Loading />}
      <form className="register__card" onSubmit={onSubmit}>
        <img alt="logo" src="/logo.png" />
        <h1>
          <span>REGISTER</span> <span></span>
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

        <input
          placeholder="confirm password"
          type={"password"}
          value={conf}
          onChange={(e) => setConf(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">ADMIN</option>
          <option value="CUSTOMER">CUSTOMER</option>
        </select>
        <p>{error}</p>
        <button type="submit">REGISTER</button>
        <h1>
          <span>Already have an Account?</span> <span></span>
        </h1>
        <button
          type="button"
          onClick={() => {
            navigate("/login", { replace: false });
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Register;
