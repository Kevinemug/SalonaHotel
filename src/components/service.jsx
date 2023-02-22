import React, { Component } from "react";
import Page from "./page";
import bar from "./bar.jpg";
import conference from "./conference.jpg";
import sauna from "./sauna.jpg";
import billard from "./billard.jpg";

import Services from "./services";
import Fade from "react-awesome-reveal";
const Service = () => {
  return (
    <>
      <Fade right>
        <Page name="/Services" />
      </Fade>
      <Fade left>
        <Services
          image={bar}
          title="Bar And Restaurant open 24/7 "
          button="Ask Info!"
        />
      </Fade>
      <Fade left>
        <Services
          image={sauna}
          title="Enjoy Our Luxurious Sauna and massage"
          button="Appointment!"
        />
      </Fade>
      <Fade left>
        <Services
          image={conference}
          title="Conference Hall Available for meetings and events"
          button="Book now!"
        />
      </Fade>
      <Fade left>
        <Services
          image={billard}
          title="Coolpooltables Available for you 24/7"
          button="Ask info!"
        />
      </Fade>
    </>
  );
};

export default Service;
