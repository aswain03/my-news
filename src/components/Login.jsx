import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { getUser } from "../utils/api";

const LogIn = () => {
  const [userInput, setUserInput] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    getUser(userInput)
      .then((userFromApi) => {
        setUserInput("");
        setUser(userFromApi);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h1 className="login_title">Sign in</h1>
      <form onSubmit={handleSignIn} className="login_form">
        <label htmlFor="username" className="login_username">
          Username:
        </label>
        <input
          type="text"
          id="login_input"
          className="login_input"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="For access: jessjelly"
          required
        />

        <button className="login_submit">Enter</button>
      </form>
    </div>
  );
};

export default LogIn;
