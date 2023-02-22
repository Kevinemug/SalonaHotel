import React, { Component } from "react";
import { TbBrandBooking } from "react-icons/tb";

const Massage = () => {
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
          please Provide us with your information to confirm your Massage
          Booking!
        </p>

        <form className="formRoom">
          <div>
            <label for="name">Names:</label>
            <input type="text" id="namel" name="name" />
          </div>
          <div>
            <label for="name">Date of arrival:</label>
            <input type="calendar" id="name" name="name" />
          </div>
          <div>
            <label for="name">Time of arrival:</label>
            <input type="calendar" id="name" name="name" />
          </div>

          <input
            type="submit"
            className="subBtn"
            style={{
              background: "blue",
              width: "186px",
              height: "69px",
              borderRadius: "50px",
              background: "#2986F2",
              borderRadius: "50px",
              marginTop: "-80px",
              fontFamily: "Iceberg",
              fontStyle: " normal",
              fontWeight: "400px",
              fontSize: "24px",
              lineHeight: "29px",
              /* identical to box height */

              textAlign: "center",

              color: "#FFFFFF",
            }}
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default Massage;
