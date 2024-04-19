// home screen buttons

import Link from "next/link";
import classes from "./BannerButton.module.css";

export default function BannerButton({ link, children }) {
  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      className={classes.button + " py-3 px-5 mx-5 my-3 text-center"}
    >
      {children}
    </Link>
  );
}
