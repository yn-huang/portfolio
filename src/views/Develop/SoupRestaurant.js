import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Banner from "../../components/Banner/Banner";
import Overview from "../../components/Overview/Overview";
import Footnav from "../../components/Footnav/Footnav";
import TextImgR from "../../components/TextImg/TextImgR";
import UList from "../../components/List/UList";
import Sidenav from "../../components/Sidenav/Sidenav";

const metadata = {
  bannerImg: "Develop/SoupRestaurant/SoupRestaurant_Develop_Banner.png",
  color: "#91a87e",
  title: "Online Menu Ordering",
  date: "Mar 2022",
  type: "Frontend",
  languages: "HTML, CSS, JavaScript",
  tools: "React, Redux",
  liveLink: "https://github.com/yn-huang/soup-restaurant",
  rightNav: "Educational Forum",
  rightLink: "/develop/gateway",
  leftNav: "",
  leftLink: "",
};

const yOffset = -50;

export default function SoupRestaurant() {
  const overviewRef = useRef();
  const featureRef = useRef();
  const [overviewIsActive, setOverviewIsActive] = useState(false);
  const [featureIsActive, setFeatureIsActive] = useState(false);

  // scroll to Overview section when sidenav clicked
  const overviewClickHandler = () => {
    const y =
      overviewRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setOverviewIsActive(true);
    setFeatureIsActive(false);
  };

  // scroll to Features section when sidenav clicked
  const featureClickHandler = () => {
    const y =
      featureRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setFeatureIsActive(true);
    setOverviewIsActive(false);
  };

  // detect which sidenav's navlink should be displayed active
  const scrollHandler = () => {
    if (
      window.pageYOffset + window.innerHeight >=
      featureRef.current.offsetTop + featureRef.current.clientHeight
    ) {
      // scrolled to Features section
      setOverviewIsActive(false);
      setFeatureIsActive(true);
    } else if (
      window.pageYOffset + window.innerHeight >=
        overviewRef.current.offsetTop &&
      window.pageYOffset <
        overviewRef.current.offsetTop + overviewRef.current.clientHeight
    ) {
      // scrolled to Overview section
      setOverviewIsActive(true);
      setFeatureIsActive(false);
    } else {
      // scrolled to none of the above sections
      setOverviewIsActive(false);
      setFeatureIsActive(false);
    }
  };

  // detect scroll event
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <main>
      <Banner bannerImg={metadata.bannerImg} />
      <Sidenav
        items={[
          {
            name: "Overview",
            clickHandler: overviewClickHandler,
            active: overviewIsActive,
          },
          {
            name: "Features",
            clickHandler: featureClickHandler,
            active: featureIsActive,
          },
        ]}
        activeColor="#d38d1d"
        inactiveColor="lightgray"
      />

      {/* main article section */}
      <article>
        {/* Overview */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <Overview
            color={metadata.color}
            title={metadata.title}
            date={metadata.date}
            type={metadata.type}
            languages={metadata.languages}
            tools={metadata.tools}
            liveLink={metadata.liveLink}
            ref={overviewRef}
          >
            A website model for a fictional restaurant's online ordering. Feel
            free to check the design process for the logo:
            <Link to="/design/soup-restaurant/">
              {" "}
              Soup Restaurant Logo Design
            </Link>
            .
          </Overview>
        </AnimationOnScroll>

        {/* Features */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TextImgR
            subtitle="React"
            img="Develop/SoupRestaurant/SoupRestaurant_Develop_Demo.gif"
            color={metadata.color}
            title="Features"
            ref={featureRef}
          >
            <UList
              items={[
                "Created reusable UI components",
                "Used Redux for managing and updating complex cart states",
              ]}
            />
          </TextImgR>
        </AnimationOnScroll>

        {/* Footnav */}
        <Footnav
          rightNav={metadata.rightNav}
          rightLink={metadata.rightLink}
          leftNav={metadata.leftNav}
          leftLink={metadata.leftLink}
        />
      </article>
    </main>
  );
}
