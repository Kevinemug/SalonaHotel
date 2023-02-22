import React, { Component } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Rooms = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/bookings");
  };

  return (
    <>
      <div className="roomContainer">
        <div className="roomImage">
          <img
            src="https://homeradar.kwst.net/images/all/29.jpg"
            style={{ height: "300px" }}
          />
        </div>
        <div className="roomDescription">
          <p className="roomTitle">
            Standard Twin Room Private Shared Bathroom
          </p>
          <p className="roomSubTitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut omnis
            veritatis voluptas expedita amet incidunt quisquam, dolores eaque!
            Fuga, corrupti voluptatum optio facilis magni reiciendis perferendis
            provident consequatur quidem excepturi!
          </p>
          <div className="roomIcons">
            <div>
              <BsPeopleFill className="rIcon" />
              <span className="pIcon"> 2 sleeps</span>
            </div>
            <div>
              <BiBed />
              <span className="pIcon"> 1 Bunk Bed</span>
            </div>
            <div>
              <button className="bookBtn" onClick={handleClick}>
                Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
