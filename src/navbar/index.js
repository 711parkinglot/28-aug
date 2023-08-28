require("file-loader?name=[name].[ext]!./index.html");

import React from "react";
import ReactDOM from "react-dom";
import App from "../app";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
