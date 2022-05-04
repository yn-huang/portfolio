import classes from "./OListItem.module.css";

export default function OListItem(props) {
  return <li className={classes["olist-item"]}>{props.children}</li>;
}
