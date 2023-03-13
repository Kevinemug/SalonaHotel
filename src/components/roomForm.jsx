import React, { Component } from "react";
import { TbBrandBooking } from "react-icons/tb";
import "../styles/hero.css";
const RoomForm = () => {
  return (
    <>
      <div className="roomFormContainer">
        <TbBrandBooking
          style={{
            color: "  #2986F2 ",
            fontSize: "100px",
            marginLeft: "100px",
          }}
        />
        <p className="roomParagraph">
          please Provide us with your information to confirm your Room booking!
        </p>

        <form
          class="formRoom"
          action="https://formspree.io/f/mbjekjog"
          method="POST"
        >
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="namel"
              name="name"
              required
            />
          </div>
          <div class="form-group">
            <label for="date">Date of arrival:</label>
            <input
              type="date"
              class="form-control"
              id="date"
              name="date"
              required
            />
          </div>
          <div class="form-group">
            <label for="time">Time of arrival:</label>
            <input
              type="time"
              class="form-control"
              id="time"
              name="time"
              required
            />
          </div>
          <div class="form-group">
            <label for="roomType">Select Room type:</label>
            <select class="form-control" id="roomType" name="roomType" required>
              <option value="20$ room">20$ room</option>
              <option value="25$ room">25$ room</option>
              <option value="30$ room">30$ room</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RoomForm;
