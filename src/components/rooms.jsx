import React, { Component } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Rooms = ({ image, title, descripton, sleeps, button, bunk }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/bookings");
  };

  return (
    <>
      <div className="roomContainer">
        <div className="roomImage">
          <img src={image} style={{ height: "300px" }} />
        </div>
        <div className="roomDescription">
          <p className="roomTitle">{title} </p>
          <p className="roomSubTitle">{descripton}</p>
          <div className="roomIcons">
            <div>
              <BsPeopleFill className="rIcon" />
              <span className="pIcon"> {sleeps}</span>
            </div>
            <div>
              <BiBed />
              <span className="pIcon"> {bunk}</span>
            </div>
            <div>
              <button className="bookBtn" onClick={handleClick}>
                {button} {""}Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
