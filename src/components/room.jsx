import React, { Component } from "react";
import Page from "./page";
import Rooms from "./rooms";
import Fade from "react-awesome-reveal";
const Room = () => {
  return (
    <>
      <Fade left>
        <Page name="/Rooms" />
      </Fade>
      <Fade right>
        <Rooms />
      </Fade>
      <Fade right>
        <Rooms />
      </Fade>
      <Fade right>
        <Rooms />
      </Fade>
      <Fade right>
        <Rooms />
      </Fade>
      <Fade right>
        <Rooms />
      </Fade>
    </>
  );
};

export default Room;
