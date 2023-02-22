import React, { Component } from "react";
const Services = ({ image, title, description, button }) => {
  return (
    <>
      <div className="servicesContainer">
        <div className="servicesImage">
          <img src={image} style={{ height: "430px" }} />
        </div>
        <div className="servicesDescription">
          <div className="serviceTitle">{title} </div>
          <div className="servicesSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            atque? Magnam, eum quo sint id quam ad a quod aperiam obcaecati
            ipsum quidem perferendis blanditiis, architecto hic vel at? Itaque
            voluptatum minima vitae mollitia nam? Excepturi eius ipsa aspernatur
            omnis, doloremque eligendi. Mollitia animi voluptas sapiente,
            blanditiis ea voluptatum doloribus esse beatae doloremque quasi!
            Numquam ex incidunt quisquam totam est!
          </div>
          <button
            className="bookBtn"
            style={{ marginTop: "50px", marginLeft: "400px" }}
          >
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
