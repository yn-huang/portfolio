"use client";

import { useState } from "react";
import classes from "./FootnavLink.module.css";

export default function FootnavLink({ link, target, rel, children }) {
  const [showHoverLine, setShowHoverLine] = useState(false);

  const mouseEnterHandler = () => {
    setShowHoverLine(true);
  };

  const mouseLeaveHandler = () => {
    setShowHoverLine(false);
  };
  return (
    <>
      <a
        href={link}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        target={target}
        rel={rel}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {children}
      </a>
      <div
        className={classes["foot-hover-line"]}
        style={{ backgroundColor: showHoverLine ? "#96B7DB" : "rgba(0,0,0,0)" }}
      ></div>
    </>
  );
}
