import React from "react";
import "../styles/playbrowser.css";
import About from "./About.js";

const Header = (props) => {
  return (
    <nav className="header">
      <p>Play Browser</p>
      <button className="buttonThin buttonSolid">About</button>
    </nav>
  );
};
export default Header;
