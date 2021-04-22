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
          Actlingual’s Committee for Citizenship (ACC) is planning to establish a cost-free
          naturalization interview tutoring service where MIT students work 1-on-1 with immigrants
          in the Greater Boston Area. Our program will provide a flexible and personalized
          environment, where tutors can work with immigrants on their specific goals for practicing
          English and the naturalization interview. Our tutors are MIT students who are all trained
          to tutor in English, with the potential for accommodating a variety of foreign languages
          as well.
        </h3>

        <h1 className="ACC-title">Leaders:</h1>

        <div className="ACC-bioRow">
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
        </div>
        <h1 className="ACC-title">Committee Officers:</h1>

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
              src="https://storage.googleapis.com/actlingual/Dharma.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Dharma Suarez Palacios</text>
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
          <div
            className="WhoWeAre-bioContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              style={{
                height: "25vh",
                padding: "1vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://storage.googleapis.com/actlingual/Sky_Kim_Social_Chair.png"
            ></img>
            <text style={{ marginBottom: "1vh" }}>Sky Kim</text>
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
        </div>
        <h3>
          ACC began work in Fall of 2020, focusing on identifying partners and opportunities for
          community engagement within MIT as well as the surrounding city.{" "}
        </h3>
      </div>
    );
  }
}

export default ACC;
