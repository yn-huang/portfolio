import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./Navlink.module.css";

export default function Navlink(props) {
  const [showHoverLine, setShowHoverLine] = useState(false);

  const mouseEnterHandler = () => {
    setShowHoverLine(true);
  };

  const mouseLeaveHandler = () => {
    setShowHoverLine(false);
  };

  return (
    <li className="nav-item d-flex flex-column align-items-start align-items-md-center mx-0 my-3 my-md-0 mx-md-3">
      <NavLink
        className={classes["nav-link"]}
        to={props.link}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {props.children}
      </NavLink>
      <div
        className={classes["hover-line"]}
        style={{ backgroundColor: showHoverLine ? "#96B7DB" : "#ffffff" }}
      ></div>
    </li>
  );
}
