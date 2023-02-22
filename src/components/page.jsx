import React, { Component } from "react";
const Page = ({ name }) => {
  return (
    <>
      <div className="pageContainer">
        <p className="pageName">{name}</p>
      </div>
    </>
  );
};

export default Page;
