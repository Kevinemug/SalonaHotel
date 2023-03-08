import React, { Component } from "react";
import Page from "./page";
import Rooms from "./rooms";
// import herro from "./herro.jpeg";
import double from "./double.jpeg";
import master from "./master.jpeg";
import se from "./se.webp";
import si from "./si.jpg";
import thirty from "./thirty.jpeg";
import twenty from "./twenty.jpeg";
import roo from "./roo.jpeg";
import Fade from "react-awesome-reveal";
const Room = () => {
  return (
    <>
      <Fade left>
        <Page name="/Rooms" />
      </Fade>
      <Fade right>
        <Rooms
          image={thirty}
          title="Standard Room With 1 sleep and a private bathroom"
          descripton="Enjoy the night with your loved ones at Salona Hotel with this 2
            leeps bathroom that has a private bathroom with shower and hot water"
          sleeps={"1 sleeps"}
          button="$25"
          bunk="1 bunk bed"
        />
      </Fade>

      <Fade right>
        <Rooms
          image={twenty}
          title="Standard Room With 1 sleep and a private bathroom"
          descripton="Enjoy the night with your loved ones at Salona Hotel with this 2
            leeps bathroom that has a private bathroom with shower and hot water"
          sleeps={"1 sleep"}
          button="$20"
          bunk="1 bunk bed"
        />
      </Fade>
      <Fade right>
        <Rooms
          image={master}
          title="Standard Private Room With  a private bathroom"
          descripton="Enjoy the night in a private room at Salona Hotel with a private bathroom 
            with shower and hot water to get all conforts you look forward to"
          sleeps={"1 sleep"}
          button="$30"
          bunk="1 bunk bed"
        />
      </Fade>
      {/* <Fade right>
        <Rooms
          image={se}
          title="Standard Room With 2 sleeps and a private bathroom"
          descripton="Enjoy the night with your loved ones at Salona Hotel with this 2
            leeps bathroom that has a private bathroom with shower and hot water"
          sleeps={"2 sleeps"}
          button="$30"
          bunk="2 bunk beds"
        />
      </Fade> */}
      <Fade right>
        <Rooms
          image={si}
          title="Standard Room With 2 sleeps and a private bathroom"
          descripton="Enjoy the night with your loved ones at Salona Hotel with this 2
            leeps bathroom that has a private bathroom with shower and hot water"
          sleeps={"2 sleeps"}
          button="$30"
          bunk="2 bunk beds"
        />
      </Fade>
    </>
  );
};

export default Room;
