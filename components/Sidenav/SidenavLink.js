import { useState } from "react";
import classes from "./SidenavLink.module.css";

export default function SidenavLink(props) {
  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <li
      className={classes["sidenav-link"]}
      style={{
        color: hover || props.active ? props.activeColor : props.inactiveColor,
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
}
