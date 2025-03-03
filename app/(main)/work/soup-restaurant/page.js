"use client";

import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { paths } from "@/routes";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import Paragraph from "@/components/Paragraph";
import OneImgM from "@/components/OneImg/OneImgM";
import OneImgS from "@/components/OneImg/OneImgS";
// import Sidenav from "@/components/Sidenav";

import bannerImg from "@/public/images/Design/SoupRestaurant/SoupRestaurant_Banner.png";
import draftImg from "@/public/images/Design/SoupRestaurant/SoupRestaurant_Draft2.png";
import finalImg from "@/public/images/Design/SoupRestaurant/SoupRestaurant_Final.png";

const metadata = {
  color: "gray",
  title: "Soup Restaurant",
  date: "Sep 2020",
  type: "Logo Design",
  tools: "Adobe AI",
  leftNav: "Bon Voyage & Far",
  leftLink: paths.work.bon_voyage_and_far,
  rightNav: "Into the Woods",
  rightLink: paths.work.into_the_woods,
};

const yOffset = -50;

export default function SoupRestaurant() {
  const overviewRef = useRef();
  const experimentationRef = useRef();
  const finalRef = useRef();
  // const [overviewIsActive, setOverviewIsActive] = useState(false);
  // const [experimentationIsActive, setExperimentationIsActive] = useState(false);
  // const [finalIsActive, setFinalIsActive] = useState(false);

  // // scroll to Overview section when sidenav clicked
  // const overviewClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     overviewRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setOverviewIsActive(true);
  //   setExperimentationIsActive(false);
  //   setFinalIsActive(false);
  // };

  // // scroll to Experimentation section when sidenav clicked
  // const experimentationClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     overviewRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setExperimentationIsActive(true);
  //   setOverviewIsActive(false);
  //   setFinalIsActive(false);
  // };

  // // scroll to Final Design section when sidenav clicked
  // const finalClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     overviewRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setFinalIsActive(true);
  //   setOverviewIsActive(false);
  //   setExperimentationIsActive(false);
  // };

  // // detect which sidenav's navlink should be displayed active
  // const scrollHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;

  //   if (
  //     offset + window.innerHeight >=
  //     finalRef.current.offsetTop + finalRef.current.clientHeight
  //   ) {
  //     // scrolled to Final Design section
  //     setOverviewIsActive(false);
  //     setExperimentationIsActive(false);
  //     setFinalIsActive(true);
  //   } else if (
  //     offset + window.innerHeight >=
  //       experimentationRef.current.offsetTop  &&
  //     offset <
  //       experimentationRef.current.offsetTop +
  //         experimentationRef.current.clientHeight
  //   ) {
  //     // scrolled to Experimentation section
  //     setExperimentationIsActive(true);
  //     setOverviewIsActive(false);
  //     setFinalIsActive(false);
  //   } else if (
  //     offset + window.innerHeight >= overviewRef.current.offsetTop &&
  //     offset < overviewRef.current.offsetTop + overviewRef.current.clientHeight
  //   ) {
  //     // scrolled to Overview section
  //     setOverviewIsActive(true);
  //     setExperimentationIsActive(false);
  //     setFinalIsActive(false);
  //   } else {
  //     // scrolled to none of the above sections
  //     setOverviewIsActive(false);
  //     setFinalIsActive(false);
  //     setExperimentationIsActive(false);
  //   }
  // };

  // // detect scroll event
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler);

  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, []);

  return (
    <main>
      <Banner bannerImg={bannerImg} styles={{ backgroundSize: "50%" }} />
      {/* <Sidenav
        items={[
          {
            name: "Overview",
            clickHandler: overviewClickHandler,
            active: overviewIsActive,
          },
          {
            name: "Experimentation",
            clickHandler: experimentationClickHandler,
            active: experimentationIsActive,
          },
          {
            name: "Final Design",
            clickHandler: finalClickHandler,
            active: finalIsActive,
          },
        ]}
        activeColor="#f58e6e"
        inactiveColor="lightgray"
      /> */}

      {/* main article section */}
      <article>
        {/* Overview */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
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
            The goal of this project is to use type treatment to design a logo
            for one of the following words: soup, meat, fish, and drinks. The
            design should be good both in a black and white version and a
            colored version. I decided to design for the word: soup.
          </Overview>
        </AnimationOnScroll>

        {/* Experimentation */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph
            subtitle="Experimentation"
            color={metadata.color}
            ref={experimentationRef}
          >
            <p>
              I experimented with pathfinders using different types and came up
              with six different designs. However, I eliminated most of them due
              to their low readability in a black and white setting. I was
              hesitant between the designs on the second row. Although it is not
              required, the first design feels more related to the “soup” word
              itself. The positive and negative space makes it look like two
              bowls. This design suits a modern restaurant. The second design
              gives the impression of wind blowing a tree, which may suit a
              clean energy company.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Experimentation Image */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <OneImgS img={draftImg} imgAlt="Soup Restaurant Drafts" unoptimized />
        </AnimationOnScroll>

        {/* Final Design */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph
            subtitle="Final Design"
            color={metadata.color}
            ref={finalRef}
          >
            <p>
              I decided to use the first design on the second row for as my
              final design. I chose colors that look refreshing for a
              restaurant.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Final Mockup */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <OneImgM img={finalImg} imgAlt="Soup Restaurant Final" unoptimized />
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
