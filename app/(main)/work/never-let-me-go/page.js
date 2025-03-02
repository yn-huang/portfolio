"use client";

import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { paths } from "@/routes";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import Paragraph from "@/components/Paragraph";
import ThreeImg from "@/components/ThreeImg";
import OneImgL from "@/components/OneImg/OneImgL";
// import Sidenav from "@/components/Sidenav";

import bannerImg from "@/public/images/Design/NeverLetMeGo/NeverLetMeGo_Banner.png";
import draft1Img from "@/public/images/Design/NeverLetMeGo/NeverLetMeGo_Draft1.png";
import draft2Img from "@/public/images/Design/NeverLetMeGo/NeverLetMeGo_Draft2.png";
import draft3Img from "@/public/images/Design/NeverLetMeGo/NeverLetMeGo_Draft3.png";
import mockupImg from "@/public/images/Design/NeverLetMeGo/NeverLetMeGo_Mockup.png";

const metadata = {
  color: "#CFC1C2",
  title: "Never Let Me Go",
  date: "Feb - Mar 2020",
  type: "Book Cover Design",
  tools: "Adobe PS, ID",
  leftNav: "Into the Woods",
  leftLink: paths.work.into_the_woods,
  rightNav: "",
  rightLink: "",
};

const yOffset = -50;

export default function NeverLetMeGo() {
  const overviewRef = useRef();
  const draftRef = useRef();
  const designThinkingRef = useRef();
  // const [overviewIsActive, setOverviewIsActive] = useState(false);
  // const [draftIsActive, setDraftIsActive] = useState(false);
  // const [designThinkingIsActive, setDesignThinkingIsActive] = useState(false);

  // // scroll to Overview section when sidenav clicked
  // const overviewClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     overviewRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setOverviewIsActive(true);
  //   setDesignThinkingIsActive(false);
  //   setDraftIsActive(false);
  // };

  // // scroll to Draft section when sidenav clicked
  // const draftClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y = draftRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setDraftIsActive(true);
  //   setOverviewIsActive(false);
  //   setDesignThinkingIsActive(false);
  // };

  // // scroll to Design Thinking section when sidenav clicked
  // const designThinkingClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     designThinkingRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setDesignThinkingIsActive(true);
  //   setOverviewIsActive(false);
  //   setDraftIsActive(false);
  // };

  // // detect which sidenav's navlink should be displayed active
  // const scrollHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   if (
  //     offset + window.innerHeight >=
  //     designThinkingRef.current.offsetTop +
  //       designThinkingRef.current.clientHeight
  //   ) {
  //     // scrolled to Design Thinking section
  //     setOverviewIsActive(false);
  //     setDraftIsActive(false);
  //     setDesignThinkingIsActive(true);
  //   } else if (
  //     offset + window.innerHeight >= draftRef.current.offsetTop &&
  //     offset < draftRef.current.offsetTop + draftRef.current.clientHeight
  //   ) {
  //     // scrolled to Draft section
  //     setDraftIsActive(true);
  //     setDesignThinkingIsActive(false);
  //     setOverviewIsActive(false);
  //   } else if (
  //     offset + window.innerHeight >= overviewRef.current.offsetTop &&
  //     offset < overviewRef.current.offsetTop + overviewRef.current.clientHeight
  //   ) {
  //     // scrolled to Overview section
  //     setOverviewIsActive(true);
  //     setDesignThinkingIsActive(false);
  //     setDraftIsActive(false);
  //   } else {
  //     // scrolled to none of the above sections
  //     setOverviewIsActive(false);
  //     setDesignThinkingIsActive(false);
  //     setDraftIsActive(false);
  //   }
  // };

  // // detect scroll event
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler);

  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, []);

  return (
    <main>
      <Banner bannerImg={bannerImg} styles={{ backgroundPosition: "bottom" }} />
      {/* <Sidenav
        items={[
          {
            name: "Overview",
            clickHandler: overviewClickHandler,
            active: overviewIsActive,
          },
          {
            name: "Drafts",
            clickHandler: draftClickHandler,
            active: draftIsActive,
          },
          {
            name: "Design Thinking",
            clickHandler: designThinkingClickHandler,
            active: designThinkingIsActive,
          },
        ]}
        activeColor="lightpink"
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
            A website model for hosting student and parent resources. I
            developed a student forum feature for program-related discussion by
            implementing RESTful API using Express framework (MVC).
          </Overview>
        </AnimationOnScroll>

        {/* Drafts */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="Drafts" color={metadata.color} ref={draftRef}>
            <p>
              I first selected three books that I have read before:{" "}
              <span className="italic">Never Let Me Go</span>,{" "}
              <span className="italic">Unbroken</span>, and{" "}
              <span className="italic">
                How to Win Friends & Influence People
              </span>
              . I drafted a version for each book. Then, I chose to continue
              with the design for{" "}
              <span className="italic">Never Let Me Go</span>.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Drafts Images */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <ThreeImg
            img1={draft1Img}
            img2={draft2Img}
            img3={draft3Img}
            img1Alt="Never Let Me Go Draft 1"
            img2Alt="Never Let Me Go Draft 2"
            img3Alt="Never Let Me Go Draft 3"
            unoptimized
          />
        </AnimationOnScroll>

        {/* Design Thinking */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph
            subtitle="Design Thinking"
            color={metadata.color}
            ref={designThinkingRef}
          >
            <p className="mb-3">
              <span className="italic">Never Let Me Go</span> is mainly about
              the main character reminisces her past. So, I used several photos
              to represent pieces of her memory. It is also an origami that
              encapsulated her memory.{" "}
            </p>
            <p>
              I used two different background colors for the front and the back
              cover, and added two strips of colors as hooks to associate the
              front cover with the back cover.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Final Mockup */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <OneImgL
            img={mockupImg}
            imgAlt="Never Let Me Go Mockup"
            unoptimized
          />
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
