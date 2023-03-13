import React, { Component } from "react";
import { TbBrandBooking } from "react-icons/tb";

const SaunaAndSteam = () => {
  return (
    <>
      <div className="roomFormContainer">
        <TbBrandBooking
          style={{
            color: "  #2986F2 ",
            fontSize: "100px",
            marginLeft: "200px",
          }}
        />
        <p className="roomParagraph">
          please Provide us with your information to confirm your Sauna and
          Steam booking!
        </p>

        <form
          className="formRoom"
          action="https://formspree.io/f/myyapywl"
          method="POST"
        >
          <div>
            <label for="name">Names:</label>
            <input
              type="text"
              id="namel"
              name="name of client"
              class="form-control"
            />
          </div>
          <div>
            <label for="name">Date of arrival:</label>
            <input
              type="date"
              id="name"
              name="date of arrival"
              class="form-control"
            />
          </div>
          <div>
            <label for="name">Time of arrival:</label>
            <input
              type="time"
              id="name"
              name="time of arrival"
              class="form-control"
            />
          </div>

          <input
            type="submit"
            className="subBtn"
            value="Submit"
            class="btn btn-primary"
          />
        </form>
      </div>
    </>
  );
};

export default SaunaAndSteam;
