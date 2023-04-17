import React, { useState } from "react";
import "./styles.css";

function Login() {
  const users = [];

  const [user, createUser] = useState({
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    createUser((prevValue) => {
      if (name === "email") {
        return { email: value, password: prevValue.password };
      } else if (name === "password") {
        return { email: prevValue.email, password: value };
      }
    });
  }

  function handleCheck() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    // include email validation as an if, and else:
    users.push(user);
  }

  return (
    <div className="container">
      <form>
        <h1>Please Log In</h1>
        <label>Username or Email</label>
        <input
          className="input-box--email"
          name="email"
          value={user.email}
          onChange={handleChange}
          type="email"
          inputMode="email"
          placeholder="address@email.com"
        ></input>
        <label>Password</label>
        <div className="password-container">
          <input
            className="input-box--password"
            name="password"
            value={user.password}
            onChange={handleChange}
            type={isChecked ? "password" : "text"}
            placeholder="password (it shouldn't be 'password'...)"
          ></input>
          <input
            className="button--visibility"
            type="radio"
            checked={isChecked}
            onClick={handleCheck}
          ></input>
        </div>
        <button className="button--submit" onClick={onSubmit} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
