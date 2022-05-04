import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../assets/images/Logo.png";
import menuButton from "../../assets/images/Icon_MenuButton.svg";
import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav id={classes.mainNav} className="navbar navbar-expand-md fixed-top">
      <div className="container py-md-2">
        <Link
          id={classes.navBrand}
          to="/"
          className="d-flex align-items-center"
        >
          <img id={classes.logo} src={logo} alt="logo" />
          <span>Yinuo Huang</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={menuButton} alt="menu button" />
        </button>
        <div
          id="navbarContent"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav d-flex d-flex-column d-sm-flex-row align-items-start">
            <Navlink link="/develop">Develop</Navlink>
            <Navlink link="/design">Design</Navlink>
            <Navlink link="/about">About</Navlink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
