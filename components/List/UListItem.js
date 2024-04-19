import classes from "./UListItem.module.css";

export default function UListItem(props) {
  return <li className={classes["ulist-item"]}>{props.children}</li>;
}
