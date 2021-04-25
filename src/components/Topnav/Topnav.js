import React from "react";
import Imm from "../../images/images@2x.png";
import "./topnav.css";

export default function Topnav(props) {
  return (
    <div className="topnav">
      <div className="logo">
        <p>{props.route}</p>
      </div>
      <div>
        <div>
          <img src={Imm} alt="Imm"></img>
        </div>
      </div>
    </div>
  );
}
