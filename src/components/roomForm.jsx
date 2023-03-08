import React, { Component } from "react";
import { TbBrandBooking } from "react-icons/tb";
const RoomForm = () => {
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
          please Provide us with your information to confirm your Room booking!
        </p>

        <form
          className="formRoom"
          action="https://formspree.io/f/xqkolzlv"
          method="POST"
        >
          <div>
            <label for="name">Names:</label>
            <input type="text" id="namel" name="name" />
          </div>
          <div>
            <label for="name">Date of arrival:</label>
            <input type="text" id="name" name="Date of arrival" />
          </div>
          <div>
            <label for="name">Time of arrival:</label>
            <input type="text" id="name" name="time" />
          </div>

          <div>
            <label for="city">Select Room type</label>
            <select id="city" name="Room type" className="selectRoom">
              <option value="20$ room" name="twin">
                20$ room
              </option>
              <option value="20$ room" name="double">
                30$ room
              </option>
            </select>
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

export default RoomForm;
