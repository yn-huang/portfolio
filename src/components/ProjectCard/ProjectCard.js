// animated card to display each project

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  const [hover, setHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  //detect window size if matches with desktop/large device
  useEffect(() => {
    const mediaSize = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaSize.matches);

    function updateScreen(e) {
      setIsDesktop(e.matches);
    }

    mediaSize.addEventListener("change", updateScreen);

    return function cleanup() {
      mediaSize.removeEventListener("change", updateScreen);
    };
  }, []);

  const mouseOverHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <Link
      className={classes.cardContainer + " mb-5"}
      to={props.link}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      style={
        isDesktop
          ? {
              width: hover ? "100%" : "95%",
              backgroundColor: hover ? props.color : "white",
            }
          : { width: "100%", backgroundColor: props.color }
      }
    >
      <div
        className={
          classes.cardContent +
          " d-flex justify-content-between flex-column flex-md-row"
        }
      >
        <img
          className={classes.cardImgDesktop}
          src={require(`../../assets/images/${props.desktopImg}`)}
          alt=""
        />
        <img
          className={classes.cardImgMobile}
          src={require(`../../assets/images/${props.mobileImg}`)}
          alt=""
        />
        <div
          className={
            classes.cardDescription +
            " d-flex flex-column justify-content-center mx-auto my-5 my-md-0"
          }
        >
          <h1 className="mb-3">{props.title}</h1>
          <p>{props.description}</p>
          <h5 className="mt-3">{props.tools}</h5>
        </div>
      </div>
    </Link>
  );
}
