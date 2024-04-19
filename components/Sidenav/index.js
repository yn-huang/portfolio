// article's side navigation

import SidenavLink from "./SidenavLink";
import classes from "./Sidenav.module.css";

export default function Sidenav(props) {
  return (
    <ul className={classes.sidenav + " d-none d-md-flex flex-column"}>
      {props.items.map((item, index) => (
        <SidenavLink
          key={index}
          activeColor={props.activeColor}
          inactiveColor={props.inactiveColor}
          id={item.name}
          onClick={item.clickHandler}
          active={item.active}
        >
          {item.name}
        </SidenavLink>
      ))}
    </ul>
  );
}
