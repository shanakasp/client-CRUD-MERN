import React from "react";
import IndividualDesease from "../IndividualDesease";
import Navbar from "../Navbar";

function Headache() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-start"
        style={{ paddingTop: "50px" }}
      >
        <div className="w-50 bg-light rounded p-3">
          <form>
            <h2>HEADACHE</h2>
            <IndividualDesease></IndividualDesease>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Headache;
