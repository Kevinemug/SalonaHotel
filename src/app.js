import React, { Component } from "react";
import Navigation from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import Room from "./components/room";
import Service from "./components/service";
import Bookings from "./components/bookings";
import Pages from "./components/pages";
import RoomForm from "./components/roomForm";
import ConferenceForm from "./components/conferenceForm";
import SaunaAndSteam from "./components/saunaAndSteam";
import Massage from "./components/massage";
import Landing from "./components/landing";
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/room" element={<Room />} />
        <Route path="/service" element={<Service />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/roomForm" element={<RoomForm />} />
        <Route path="/bookings" element={<Bookings />}>
          <Route path="/bookings" element={<RoomForm />} />
          <Route path="/bookings/roomForm" element={<RoomForm />} />
          <Route path="/bookings/conferenceForm" element={<ConferenceForm />} />
          <Route path="/bookings/SaunaAndSteam" element={<SaunaAndSteam />} />
          <Route path="/bookings/massage" element={<Massage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
