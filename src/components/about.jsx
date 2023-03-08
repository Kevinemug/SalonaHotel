import React from "react";
import Fade from "react-awesome-reveal";
import Page from "./page";
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
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
        <h3 style={{ color: "grey", marginLeft: "500px" }}>How to Reach us</h3>
        <div style={{ marginLeft: "400px", marginTop: "60px" }}>
          <FiPhoneCall
            style={{
              fontSize: "20px",
            }}
          />{" "}
          <span
            style={{
              marginLeft: "30px",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "dodgerblue",
            }}
          >
            +256 741 740994 or +256 701 217687{" "}
          </span>
        </div>
        <div style={{ marginLeft: "400px", marginTop: "40px" }}>
          <SiGmail
            style={{
              fontSize: "20px",
            }}
          />{" "}
          <span
            style={{
              marginLeft: "30px",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "dodgerblue",
            }}
          >
            salonahotel@gmail.com
          </span>
        </div>
        <div style={{ marginLeft: "400px", marginTop: "40px" }}>
          <HiLocationMarker
            style={{
              fontSize: "20px",
            }}
          />{" "}
          <span
            style={{
              marginLeft: "30px",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "dodgerblue",
            }}
          >
            <p
              style={{
                color: "grey",
                fontSize: "13px",
                fontStyle: "italic",
                marginTop: "-20px",
                marginLeft: "50px",
              }}
            >
              Located at Namirembe Road Mengo Bakuli app-Sanyu Babies Home
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
