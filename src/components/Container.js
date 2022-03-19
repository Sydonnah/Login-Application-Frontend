import React from "react";
import { useState } from "react";
import "./Container.css";

export const Container = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const saveURL = "http://localhost:8080/user/save";
  const checkURL = "http://localhost:8080/user/check";

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    const add = {
      username: username,
      password: password,
    };

    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(add),
    };

    fetch(saveURL, data)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        alert("Credentials added Sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidation = () => {
    const add = {
      username: username,
      password: password,
    };

    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(add),
    };

    fetch(checkURL, data)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.new_user === false) {
          alert("User Already Exists");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("User Does Not Exist");
      });
  };

  return (
    <div className="con">
      <div className="title">Sign In </div>
      <div>
        <form>
          <label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="user"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pass"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="password"
            ></input>
          </label>
          <div className="button-container">
            <button className="add" onClick={handleRegistration}>
              Add
            </button>
            <button className="submit" onClick={handleValidation}>
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
