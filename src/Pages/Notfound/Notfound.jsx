import React from "react";
import "../../assets/css/bootstrap.css";
import "./Notfound.css";
import { NavLink } from "react-router-dom";

function Notfound() {
  return (
    <div className="container page-format">
      <h1>Page not found</h1>
      <h6>
        <NavLink to="/">Return to homepage</NavLink>
      </h6>
    </div>
  );
}

export default Notfound;
