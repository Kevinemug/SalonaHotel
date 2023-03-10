import React, { Component } from "react";
import Page from "./page";
import inzoka from "./inzoka.jpeg";
import conference from "./conference.jpg";
import sauna from "./sauna.jpg";
import billard from "./billard.jpg";
import { NavLink } from "react-router-dom";

import Services from "./services";
import Fade from "react-awesome-reveal";
const Service = () => {
  return (
    <>
      <Fade right>
        <Page name="/Services" />
      </Fade>
      <Fade left>
        <NavLink to="/bookings/saunaAndSteam" className="link">
          <Services
            image={sauna}
            title="Enjoy Our Luxurious Sauna and massage"
            button="Appointment!"
          />
        </NavLink>
      </Fade>
      <Fade left>
        <NavLink to="/bookings/conferenceForm" className="link">
          <Services
            image={conference}
            title="Conference Halll Available for meetings and events"
            button="Book now!"
          />
        </NavLink>
      </Fade>
      <Fade left>
        <NavLink to="/about" className="link">
          <Services
            image={billard}
            title="Coolpooltables Available for you 24/7"
            button="Ask info!"
          />
        </NavLink>
      </Fade>
      <Fade left>
        <NavLink to="/about" className="link">
          <Services
            image={inzoka}
            title="Bar And Restaurant open 24/7 "
            button="Ask Info!"
          />
        </NavLink>
      </Fade>
    </>
  );
};

export default Service;
