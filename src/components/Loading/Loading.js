// loading animation

import classes from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      className={
        classes["loader-container"] +
        " d-flex flex-column justify-content-center align-items-center"
      }
    >
      <div className={classes["lds-ripple"]}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
