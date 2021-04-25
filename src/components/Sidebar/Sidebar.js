import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import Star from "../../images/Star wars logo.png";
import Dash from "../../images/dashboard.svg";
import Bui from "../../images/building.svg";
import Sch from "../../images/shopping-basket (1).svg";
import Men from "../../images/menu.svg";

export default function Sidebar(props) {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="sidebarLogo">
          <img src={Star} alt="Star"></img>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={`${props.url}/overview`}>
            <div style={{ width: "20%" }}>
              <img src={Dash} alt="Dash" />
            </div>
            <div style={{ width: "60%" }}>
              <span>Dashboard</span>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={`${props.url}/starships`}>
            <div style={{ width: "20%" }}>
              <img src={Bui} alt="Bui" />
            </div>
            <div style={{ width: "60%" }}>
              <span>Starships</span>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={`${props.url}/people`}>
            <div style={{ width: "20%" }}>
              <img src={Sch} alt="Sch" />
            </div>
            <div style={{ width: "60%" }}>
              <span>People</span>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={`${props.url}/vehicles`}>
            <div style={{ width: "20%" }}>
              <img src={Sch} alt="Sch" />
            </div>
            <div style={{ width: "60%" }}>
              <span>Vehicles</span>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={`${props.url}/species`}>
            <div style={{ width: "20%" }}>
              <img src={Men} alt="Men" />
            </div>
            <div style={{ width: "60%" }}>
              <span>Species</span>
            </div>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
