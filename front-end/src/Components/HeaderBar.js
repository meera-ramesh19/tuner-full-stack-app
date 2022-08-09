import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import "./myStyles.css";

function HeaderBar() {

    return (
      <div className="topnav">
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <Navbar.Brand href="">Tuner Music App</Navbar.Brand>
        </Navbar>
      </div>
    );
  
}

export default HeaderBar;