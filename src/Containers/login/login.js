import React, { useState } from "react";
import classes from "./login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className={classes.wrapper}>
      {hasAccount ? <h3>Log In </h3> : <h3>Sign Up</h3>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className={classes.input}
        autoFocus
      />
      <span className={classes.error}> </span>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={classes.input}
      />
      <span className={classes.error}></span>

      {hasAccount ? (
        <>
          <button className={classes.button}>Sign In</button>
          <span className={classes.toggleMsg}>
            If you dont have an account, you can
            <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
          </span>
        </>
      ) : (
        <>
          <button className={classes.button}>Sign Up</button>
          <span className={classes.toggleMsg}>
            If you already have an account, you can
            <span onClick={() => setHasAccount(!hasAccount)}> Sign In</span>
          </span>
        </>
      )}
    </div>
  );
};

export default Login;
