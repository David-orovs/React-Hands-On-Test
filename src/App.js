import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
