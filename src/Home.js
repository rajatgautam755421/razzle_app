import React from "react";
import logo from "./react.svg";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Rajat Gautam</h1>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1>Rajat Gautam</h1>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{" "}
          <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
