import React, { Component } from "react";
import Page from "./page";
import bar from "./bar.jpg";
import conference from "./conference.jpg";
import sauna from "./sauna.jpg";
import billard from "./billard.jpg";

import Services from "./services";

const Service = () => {
  return (
    <>
      <Page name="/Services" />
      <Services
        image={bar}
        title="Bar And Restaurant open 24/7 "
        button="Ask Info!"
      />
      <Services
        image={sauna}
        title="Enjoy Our Luxurious Sauna and massage"
        button="Appointment!"
      />
      <Services
        image={conference}
        title="Conference Hall Available for meetings and events"
        button="Book now!"
      />
      <Services
        image={billard}
        title="Coolpooltables Available for you 24/7"
        button="Ask info!"
      />
    </>
  );
};

export default Service;
