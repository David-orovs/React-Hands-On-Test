import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import General from "./General/General";
import Starship from "./Starships/Starship";
import People from "./People/People";
import Vehicle from "./Vehicles/Vehicles";
import Species from "./Species/Species";

import "./dashboard.css";

export default function Dashboard() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <div className="container">
        <Sidebar url={url} />
        <div className="content">
          <div className="pageContent">
            <Switch>
              <Route path={`${path}/overview`} component={General} />
              <Route path={`${path}/starships`} component={Starship} />
              <Route path={`${path}/people`} component={People} />
              <Route path={`${path}/vehicles`} component={Vehicle} />
              <Route path={`${path}/species`} component={Species} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
