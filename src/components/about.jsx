import React from "react";
import Fade from "react-awesome-reveal";
import Page from "./page";
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import "../styles/about.css";
const About = () => {
  const recipientEmail = "kevineeuwamahoro@gmail.com";
  const emailSubject = "Hello from my React App!";
  const handleButtonClick = () => {
    window.location.href = `mailto:${recipientEmail}?subject=${emailSubject}`;
  };

  return (
    <>
      <Fade left>
        <Page name="/About us" />
      </Fade>
      <div className="locationDescription">
        <h3 className="locationHeading">How to Reach Us</h3>
        <div className="contactSection">
          <FiPhoneCall className="contactIcon" />
          <span className="contactText">
            +256 741 740994 or +256 701 217687{" "}
          </span>
        </div>
        <div className="contactSection">
          <SiGmail className="contactIcon" />
          <span className="contactText">salonahotel1@gmail.com</span>
        </div>
        <div className="contactSection">
          <HiLocationMarker className="contactIcon" />
          <span className="contactText">
            Located at Namirembe Road Mengo Bakuli app-Sanyu Babies Home
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
