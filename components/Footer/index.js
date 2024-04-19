import classes from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className={`${classes.footer} mt-auto container py-1`}>
      <p className="text-muted text-center">
        &copy; {currentYear} Design & Code by Yinuo Huang
      </p>
    </footer>
  );
}