import React, { Component } from "react";
import "./HomePage.css";
import "../../utilities.css";
import { Link } from "@reach/router";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomePage-container">
        <div className="HomePage-quoteBox">
          <h1 className="HomePage-quote">
            “If you talk to a man in a language he understands, that goes to his head. If you talk
            to him in his language, that goes to his heart.” -Nelson Mandela
          </h1>
          <img
            className="HomePage-quoteImg"
            src="https://storage.googleapis.com/actlingual/mandela.svg"
          ></img>
        </div>

        <div className="HomePage-titleBox">
          <Link to="whoweare" style={{ textDecoration: "none", color: "inherit" }}>
            <h2 className="HomePage-title">About Us</h2>
          </Link>
        </div>

        <h3 className="u-sectionBorder HomePage-aboutusText">
          When an individual is not able to speak English well enough to full understand the
          situation in different health and social settings, said individual is not able to fully
          communicate or make well-informed decisions. MIT Actlingual members help bridge this gap
          by connecting multingual and multicultural students with opportunities of service in the
          MIT/Boston/Cambridge area to use their language skills to aid the lives of people in the
          communities in and around MIT.
        </h3>

        <div className="HomePage-titleBox">
          <h2 className="HomePage-title">Current Initiatives</h2>
        </div>

        <div className="u-evenSplit">
          <div className="HomePage-leftInits">
            <div>
              <div className="u-flex u-flex-justifyCenter">
                <text className="HomePage-subtitle">
                  <a href="/amic">AMIC</a>
                </text>
              </div>
              <br />
              <div className="HomePage-contentTextBox">
                <text className="HomePage-contentText">
                  AMIC is working to design a medical interpreting class to prepare MIT students to
                  gain the certification and the experience to volunteer as medical interpreters in
                  various clinical settings in the Boston area.
                </text>
              </div>
            </div>
            <div>
              <img
                style={{
                  height: "25vh",
                  padding: "1vh",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"
              ></img>
            </div>
            <div>
              <div className="u-flex u-flex-justifyCenter">
                <text className="HomePage-subtitle">AAI Vote</text>
              </div>
              <br />
              <div className="HomePage-contentTextBox">
                {" "}
                <text className="HomePage-contentText">
                  Asian American Initiative (AAI) Vote translated different voting resources
                  (especially the Presidential Platforms) in order to provide information about
                  voting to a broader audience in Fall 2020.
                </text>
              </div>
            </div>
            <div>
              <img
                style={{
                  height: "25vh",
                  padding: "1vh",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"
              ></img>
            </div>
          </div>
          <div className="HomePage-rightInits">
            <div>
              <a href="/amic">
                <img
                  style={{
                    height: "25vh",
                    padding: "1vh",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"
                ></img>
              </a>
            </div>
            <div>
              <div className="u-flex u-flex-justifyCenter">
                <text className="HomePage-subtitle">CHEDAR</text>
              </div>
              <br />
              <div className="HomePage-contentTextBox">
                <text className="HomePage-contentText">
                  Through community health classes, Community Health, Education, and Resources
                  (CHEDAR) aims to provide health-related information to targeted audiences within
                  the Boston-area population that would benefit from a greater understanding of such
                  issues.
                </text>
              </div>
            </div>
            <div>
              <a href="/aaiVote">
                <img
                  style={{
                    height: "25vh",
                    padding: "1vh",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"
                ></img>
              </a>
            </div>
            <div>
              <div className="u-flex u-flex-justifyCenter">
                <text className="HomePage-subtitle">
                  <a href="/acc">ACC</a>
                </text>
              </div>
              <br />
              <div className="HomePage-contentTextBox">
                <text className="HomePage-contentText">
                  Actlingual Committee for Citizenship (ACC) [to be initiated] provides citizenship
                  assistance to immigrants from a wide range of backgrounds, by creating
                  tutor-student pairings between multilingual MIT students and immigrants looking to
                  take the citizenship interview.
                </text>
              </div>
            </div>
          </div>
        </div>
        <div className="HomePage-titleBox">
          <h2 className="HomePage-title">Interested in Starting a New Committee of Your Own?</h2>
        </div>
        <div>
          <img
            style={{
              height: "25vh",
              padding: "1vh",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"
          ></img>
        </div>
      </div>
    );
  }
}

export default HomePage;
