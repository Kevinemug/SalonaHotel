import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const [isClicked, setIsClicked] = useState(null);
  const handleClick = (btnId) => {
    setIsClicked(btnId);
  };
  const getButtonClassName = (btnId) => {
    if (btnId === isClicked) {
      return "navBtn  navBtnActive";
    } else {
      return "navBtn";
    }
  };

  return (
    <>
      <div className="navContainer">
        <div className="navHeader">
          <div className="salonaHotel">SalonaHotel</div>
          <div className="account">
            <button className="register">Register</button>
            <button className="login">Login</button>
          </div>
        </div>
        <div className="navLinksbtn">
          <div>
            <NavLink to="/room">
              <button
                className={getButtonClassName(1)}
                onClick={() => handleClick(1)}
              >
                Rooms
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/service">
              <button
                className={getButtonClassName(2)}
                onClick={() => handleClick(2)}
              >
                Services
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/bookings">
              <button
                className={getButtonClassName(3)}
                onClick={() => handleClick(3)}
              >
                Bookings
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/pages">
              <button
                className={getButtonClassName(4)}
                onClick={() => handleClick(4)}
              >
                Pages
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
