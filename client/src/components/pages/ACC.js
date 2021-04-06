import React, { Component } from "react";
import "./ACC.css";
import "../../utilities.css";

class ACC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ACC-container">
        <h1 className="ACC-title">Actlingual Committee for Citizenship (ACC)</h1>
        <h3>
          Actlingual Committee for Citizenship (ACC) [to be initiated] provides citizenship
          assistance to immigrants from a wide range of backgrounds, by creating tutor-student
          pairings between multilingual MIT students and immigrants looking to take the citizenship
          interview.
        </h3>
        <h1 className="ACC-title">Registration</h1>
        <h1 className="ACC-title">Curriculum Development & Outreach Officers</h1>
        <div className="ACC-bioRow">
          <div className="ACC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Lulu_Tian_ACC_Leader.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Lulu Tian</text>
          </div>
          <div className="ACC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Dharma.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Dharma</text>
          </div>
          <div className="ACC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Nghi.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Nghi Nguyen</text>
          </div>{" "}
          <div className="ACC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Shaida.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Shaida Nishat</text>
          </div>
        </div>
      </div>
    );
  }
}

export default ACC;
