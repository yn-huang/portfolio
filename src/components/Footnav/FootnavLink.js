import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./FootnavLink.module.css";

export default function FootnavLink(props) {
  const [showHoverLine, setShowHoverLine] = useState(false);

  const mouseEnterHandler = () => {
    setShowHoverLine(true);
  };

  const mouseLeaveHandler = () => {
    setShowHoverLine(false);
  };
  return (
    <>
      <Link
        to={props.link}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        target={props.target}
        rel={props.rel}
      >
        {props.children}
      </Link>
      <div
        className={classes["foot-hover-line"]}
        style={{ backgroundColor: showHoverLine ? "#96B7DB" : "#ffffff" }}
      ></div>
    </>
  );
}
