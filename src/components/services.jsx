import React, { Component } from "react";
const Services = ({ image, title, description, button }) => {
  return (
    <>
      <div className="servicesContainer">
        <div className="servicesImage">
          <img src={image} style={{ height: "270px", width: "100%" }} />
        </div>
        <div className="servicesDescription">
          <div className="serviceTitle">{title} </div>
          <div className="servicesSubtitle">{description} </div>
          <button className="bookBtn" style={{}}>
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
