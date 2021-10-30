import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div className="">
    <h1>Hats Page 👒</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route exact component={HatsPage} path="/hats" />
      </Switch>
    </div>
  );
}

export default App;
