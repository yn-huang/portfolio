// home screen buttons

import { Link } from "react-router-dom";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <Link
      to={props.link}
      className={classes.button + " py-3 px-5 mx-5 my-3 text-center"}
    >
      {props.children}
    </Link>
  );
}
