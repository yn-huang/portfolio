// copyright footer

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${classes.footer} mt-auto container py-1`}>
      <p className="text-muted text-center">
        &copy; 2022 Design & Code by Yinuo Huang
      </p>
    </footer>
  );
}
