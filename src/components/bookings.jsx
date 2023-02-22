import React, { Component, useState } from "react";
import Page from "./page";
import { NavLink, Outlet } from "react-router-dom";
import BookingLink from "./bookingLink";

const Bookings = () => {
  return (
    <>
      <Page name="/Bookings" />

      <div className="bookingsContainer">
        <div className="bookingTypeContainer">
          <NavLink to="/bookings/roomForm">
            <BookingLink link="Rooms" />
          </NavLink>
          <NavLink to="/bookings/conferenceForm">
            {" "}
            <BookingLink link="Conference Hall" />
          </NavLink>
          <NavLink to="/bookings/saunaAndSteam">
            <BookingLink link="Sauna and Steam" />
          </NavLink>
          <NavLink to="/bookings/massage">
            <BookingLink link="Massage" />
          </NavLink>
        </div>
        <div className="bookingFormPlaceHolder">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Bookings;
