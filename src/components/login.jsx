import React from "react";
import { useState } from "react";
import { AccountSignUp } from "./signUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AccountLogin = () => {
  const [closePopup, setClosePopup] = useState(false);
  const [loginPopup, setSignInPopup] = useState(false);

  const displaySignUp = () => {
    setSignInPopup(!loginPopup);
  };

  const CloseMe = () => {
    setClosePopup(!closePopup);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("https://brandapi.onrender.com/api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        // handle successful login
        console.log(response.data);
        const user = response.data;
        console.log(user);
        alert("you have successfully logged to salonaHotelwebsite");

        navigate("/room");
      })
      .catch((error) => {
        // handle login error
        console.error(error);
      });
  };

  return (
    <div
      className={`login__popup--container ${
        closePopup ? "login__popup--remove" : ""
      }`}
    >
      <div className="login__popup--overlay"></div>
      <div className="login__popup--content">
        <div className="login__popup--button">
          <button onClick={CloseMe} type="button" className="cancel--button">
            X
          </button>
        </div>
        <div className="login__popup--header">
          <h1>Login</h1>
          <p>
            Don't have an account?{" "}
            <span onClick={displaySignUp}>
              <a href="#">Create your account</a>
            </span>
            , it takes less than a minute.
          </p>
        </div>
        <form action="" className="login__popup--form" onSubmit={handleLogin}>
          <div className="popup__form--name">
            <label htmlFor="name__input">Username (use: agent)</label>
            <input
              type="text"
              id="name__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )} */}
          <div className="popup__form--password">
            <label htmlFor="password__input">Password (use: agent)</label>
            <input
              type="password"
              id="password__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )} */}
          <button
            className="login__submit--btn"
            style={{ backgroundColor: "#011640" }}
          >
            Login
          </button>
          <hr />
          <div className="login__options">
            <button className="lostPassword--btn">Lost your password?</button>
          </div>
        </form>
      </div>
      {loginPopup ? <AccountSignUp /> : null}
    </div>
  );
};
