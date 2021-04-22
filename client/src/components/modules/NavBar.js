import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

import "../../utilities.css";

/**
 * The navigation bar at the top of all pages.
 */

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <nav className="NavBar-container">
          <div>
            <Link to="/" className="NavBar-logo">
              <img
                style={{ height: "6vh", paddingTop: "8px" }}
                src="https://storage.googleapis.com/actlingual/actlingualLogo.png"
              ></img>
            </Link>
          </div>
          <div className="NavBar-buttons">
            {/* <Link to='/committees' className="NavBar-link">Current Initiatives</Link> */}
            <Link to="/progress" className="NavBar-link">
              Progress
            </Link>
            <div className="NavBar-dropdown">
              <a href="#currentInitiatives" className="NavBar-dropbtn">
                Initiatives
              </a>
              <div className="NavBar-dropdown-content">
                <a href="/amic">AMIC</a>
                <a href="/#chedar">CHEDAR</a>
                <a href="/#aaiVote">AAI Vote</a>
                <Link to="/acc">ACC</Link>
              </div>
            </div>
            <Link to="/whoweare" className="NavBar-link">
              Who We Are
            </Link>
            {/* <Link to='/whoWeAre' className="NavBar-link">About Us</Link> */}
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
