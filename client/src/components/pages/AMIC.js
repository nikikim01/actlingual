import React, { Component } from "react";
import "./AMIC.css";
import "../../utilities.css";
import { Link } from "@reach/router";

class AMIC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AMIC-container">
        <h1 className="AMIC-title">Actlingual Medical Interpreting Committee (AMIC)</h1>
        <h3>
          AMIC is working to design a medical interpreting class to prepare MIT students to gain the
          certification and the experience to volunteer as medical interpreters in various clinical
          settings in the Boston area.
        </h3>
        <h1 className="AMIC-title">Partners</h1>
        <h1 className="AMIC-title">Services</h1>
        <h1 className="AMIC-title">Languages</h1>
        <h1 className="AMIC-title">What's the name of the AMIC subteam</h1>
        <div className="AMIC-bioRow">
          <div className="AMIC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Ally.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Ally Vernich</text>
          </div>
          <div className="AMIC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Amanda.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Amanda Mei</text>
          </div>
          <div className="AMIC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Ilana.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Ilana Nazari</text>
          </div>{" "}
          <div className="AMIC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Jessica_Jimenez_ACC_Leader.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Jessica Jimenez</text>
          </div>
          <div className="AMIC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Michelle.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Michelle He</text>
          </div>
          <div className="AMIC-bioContainer" style={{ display: "flex", flexDirection: "column" }}>
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

export default AMIC;
