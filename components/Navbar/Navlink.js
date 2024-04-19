"use client";

import { useState } from "react";
import Nav from "react-bootstrap/Nav";

import classes from "./Navlink.module.css";

export default function Navlink({ children, link }) {
  const [showHoverLine, setShowHoverLine] = useState(false);

  const mouseEnterHandler = () => {
    setShowHoverLine(true);
  };

  const mouseLeaveHandler = () => {
    setShowHoverLine(false);
  };

  return (
    <li className="nav-item d-flex flex-column align-items-start align-items-md-center mx-0 my-3 my-md-0 mx-md-3">
      <Nav.Link
        href={link}
        style={{
          textDecoration: "none",
          color: "#242323",
          lineHeight: "initial",
          padding: 0
        }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {children}
      </Nav.Link>
      <div
        className={classes["hover-line"]}
        style={{ backgroundColor: showHoverLine ? "#96B7DB" : "#ffffff" }}
      ></div>
    </li>
  );
}
