import React, { Component } from "react";
import { Router, Location } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import HomePage from "./pages/HomePage.js";
import WhoWeAre from "./pages/WhoWeAre.js";
import "../utilities.css";

// import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

class OnRouteChangeWorker extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action()
    }
  }

  render() {
    return null
  }
}


const OnRouteChange = ({ action }) => (
    
  <Location>
    {({ location }) => <OnRouteChangeWorker location={location} action={action} />}
  </Location>
)

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    // get("/api/whoami").then((user) => {
    //   if (user._id) {
    //     // they are registed in the database, and currently logged in.
    //     this.setState({ userId: user._id });
    //   }
    // });
  }

  // handleLogin = (res) => {
  //   console.log(`Logged in as ${res.profileObj.name}`);
  //   const userToken = res.tokenObj.id_token;
  //   post("/api/login", { token: userToken }).then((user) => {
  //     this.setState({ userId: user._id });
  //     post("/api/initsocket", { socketid: socket.id });
  //   });
  // };

  // handleLogout = () => {
  //   this.setState({ userId: undefined });
  //   post("/api/logout");
  // };

  render() {
    return (
      <>
      <NavBar/>
        <Router>
          <HomePage path="/"/>
          <WhoWeAre path="/whoweare"/>
          <NotFound default />
        </Router>
        <OnRouteChange action={() => { window.scrollTo(0, 0) }} />

      </>
    );
  }
}

export default App;
