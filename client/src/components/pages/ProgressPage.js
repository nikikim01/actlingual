import React, { Component } from "react";
import "./ProgressPage.css";
import "../../utilities.css";
import { Link } from "@reach/router";

class ProgressPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="ProgressPage-container">
        <p className="ProgressPage-body">
          <b className="ProgressPage-title">April 2021</b>
          <br />
          As a part of this program that we have that I need a description of, 12 people were
          certified with a specific type of certification.
        </p>
        <p className="ProgressPage-body">
          <b className="ProgressPage-title">March 2021</b>
          <br />
          Something else happened - what event did we have?
        </p>

        <p className="ProgressPage-body">
          <b className="ProgressPage-title">March 2021</b>
          <br />
          Received COOP grant from University and Community Relations Committee of the Harvard/MIT
          COOP.
        </p>
        <p className="ProgressPage-body">
          <b className="ProgressPage-title">December 20??</b>
          <br />
          This new committee was made because...
        </p>
        <p className="ProgressPage-body">
          <b className="ProgressPage-title">October 20??</b>
          <br />
          MedLingual rebranded to ActLingual because of yada yada yada.
        </p>
        <p className="ProgressPage-body">
          <b className="ProgressPage-title">September 20??</b>
          <br />
          MedLingual was created.
        </p>
      </main>
    );
  }
}

export default ProgressPage;
