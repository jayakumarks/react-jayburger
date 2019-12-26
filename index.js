import React, { Component } from "react";
import { render } from "react-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "BURGER APPLICATION",
      name: "Jayakumar"
    };
  }

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
