"use client";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import { default as ReactNavbar } from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import classes from "./Navbar.module.css";
import logo from "@/public/images/Logo.png";
import menuButton from "@/public/images/Icon_MenuButton.svg";
import Navlink from "./Navlink";
import { paths } from "@/routes";

export default function Navbar() {
  return (
    <ReactNavbar id={classes.mainNav} expand="md" fixed="top">
      <Container style={{ paddingTop: 2, paddingBottom: 2 }}>
        <ReactNavbar.Brand
          href={paths.root}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={logo}
            width={30}
            alt="logo"
            style={{ marginRight: "20px" }}
          />
          <span
            style={{
              color: "#96b7db",
              lineHeight: 0,
              fontFamily: "AcuminRegular",
              fontSize: "1rem",
            }}
          >
            Yinuo Huang
          </span>
        </ReactNavbar.Brand>
        <ReactNavbar.Toggle
          aria-controls="navbarContent"
          style={{ border: "none", paddingBottom: 0 }}
        >
          <Image src={menuButton} alt="menu button iamge" />
        </ReactNavbar.Toggle>
        <ReactNavbar.Collapse
          id="navbarContent"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Navlink link={paths.work.root}>Work</Navlink>
            <Navlink link={paths.about}>About</Navlink>
          </Nav>
        </ReactNavbar.Collapse>
      </Container>
    </ReactNavbar>
  );
}
