import React from "react";
import { Link, Linkq } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="">
        <div>Home</div>
      </Link>
      <Link to="/dashboard">
        <div>Stocks</div>
      </Link>
      <Link to="/about">
        <div>About us</div>
      </Link>
      <Link to="/stock">
        <div>single stock</div>
      </Link>
    </div>
  );
};
