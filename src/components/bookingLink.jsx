import React, { Component } from "react";
const BookingLink = ({ link }) => {
  return (
    <>
      <div className="bookingLinkContainer">
        <p className="bookingLinkParagraph">{link}</p>
      </div>
    </>
  );
};

export default BookingLink;
