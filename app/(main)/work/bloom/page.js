"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { paths } from "@/routes";
import bannerImg from "@/public/images/Develop/Bloom/Bloom_Banner.png";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import TextImgR from "@/components/TextImg/TextImgR";
import TextImgL from "@/components/TextImg/TextImgL";
import UList from "@/components/List/UList";
// import Sidenav from "@/components/Sidenav";

import LoginImg from "@/public/images/Develop/Bloom/Bloom_SSO_Login.gif";
import StudyTableImg from "@/public/images/Develop/Bloom/Bloom_Study_Table.png";
import ProcessMapImg from "@/public/images/Develop/Bloom/Bloom_Process_Map.png";
import LockImg from "@/public/images/Develop/Bloom/Lock.png";

const metadata = {
  color: "#5F697F",
  title: "Bloom",
  date: "Aug 2022 - Present",
  type: "Full Stack",
  languages: "HTML, CSS, JavaScript",
  tools:
    "React, Node, Express, Neo4j, Oracle, Material UI, React Hook Form, SAML, Next.js",
  liveLink: "https://bloom.crso.unc.edu/",
  liveLinkDescription: "(only available to UNC and UNCH accounts)",
  rightNav: "",
  rightLink: "",
  leftNav: "",
  leftLink: "",
};

const yOffset = -50;

export default function Bloom() {
  const overviewRef = useRef();
  const featureRef = useRef();
  // const [overviewIsActive, setOverviewIsActive] = useState(false);
  // const [featureIsActive, setFeatureIsActive] = useState(false);

  // // scroll to Overview section when sidenav clicked
  // const overviewClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     overviewRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setOverviewIsActive(true);
  //   setFeatureIsActive(false);
  // };

  // // scroll to Features section when sidenav clicked
  // const featureClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y = featureRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setFeatureIsActive(true);
  //   setOverviewIsActive(false);
  // };

  // // detect which sidenav's navlink should be displayed active
  // const scrollHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   if (
  //     offset + window.innerHeight >= overviewRef.current.offsetTop &&
  //     offset < overviewRef.current.offsetTop + overviewRef.current.clientHeight
  //   ) {
  //     // scrolled to Overview section
  //     setOverviewIsActive(true);
  //     setFeatureIsActive(false);
  //   } else if (
  //     offset + window.innerHeight >=
  //     featureRef.current.offsetTop + featureRef.current.clientHeight
  //   ) {
  //     // scrolled to Features section
  //     setOverviewIsActive(false);
  //     setFeatureIsActive(true);
  //   } else {
  //     // scrolled to none of the above sections
  //     setOverviewIsActive(false);
  //     setFeatureIsActive(false);
  //   }
  // };

  // // detect scroll event
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler);

  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, []);

  return (
    <main>
      <Banner bannerImg={bannerImg} />
      {/* <Sidenav
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
        activeColor="#178754"
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
            liveLinkDescription={metadata.liveLinkDescription}
            ref={overviewRef}
          >
            Bloom is an award-winning process mapping web app that assists
            research teams in understanding and navigating the steps required to
            initiate clinical research studies (
            <a href="https://www.centerwatch.com/articles/26591-uncs-study-startup-mapping-tool-wins-wcg-innovation-challenge">
              Innovation Challenge at the 2023 MAGI East Clinical Research
              Conference
            </a>
            ). I developed both the user and admin panel.
          </Overview>
        </AnimationOnScroll>

        {/* Feature #1 */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TextImgR
            title="Features"
            subtitle="1. Login & Sign Up"
            img={LoginImg}
            imgAlt="Login & Sign Up Gif"
            color={metadata.color}
            ref={featureRef}
          >
            <UList
              items={[
                "Implemented Passport to serve as the authentication middleware for SAML SSO.",
              ]}
            />
          </TextImgR>
        </AnimationOnScroll>

        {/* Feature #2 */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TextImgL
            subtitle="2. Study Table & Form Modal"
            img={StudyTableImg}
            imgAlt="Study Table Image"
            color={metadata.color}
            unoptimized
          >
            <UList
              items={[
                "Implemented Material UI (MUI) Datagrid for table display and React Hook Form for form submission.",
                "Delivered asynchronous API calls (AJAX) through Express server for database handling.",
              ]}
            />
          </TextImgL>
        </AnimationOnScroll>

        {/* Feature #3 */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TextImgR
            subtitle="3. Wizard & Process Map"
            img={ProcessMapImg}
            imgAlt="Process Map Image"
            color={metadata.color}
            unoptimized
          >
            <UList
              items={[
                "Utilized Neo4j graph database to chronologically map out clinical research initiation process based on user inputs about their studies.",
              ]}
            />
          </TextImgR>
        </AnimationOnScroll>

        {/* Feature #4 */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TextImgL
            subtitle="4. Work in Progress"
            img={LockImg}
            imgAlt="New Post Gif"
            color={metadata.color}
            unoptimized
          >
            <UList
              items={[
                "Because Create React App (CRA) is no longer a recommended solution for creating React applications, we are working on switching Bloom to Next.js framework with a new interface layout.",
              ]}
            />
          </TextImgL>
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
