"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { paths } from "@/routes";
import bannerImg from "@/public/images/Develop/LearnHub/Learn_Hub_Banner.png";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import UList from "@/components/List/UList";
import Sidenav from "@/components/Sidenav";
import Paragraph from "@/components/Paragraph";

const metadata = {
  color: "#6D97C8",
  title: "Learn Hub",
  date: "Sep 2023 - Apr 2024",
  type: "Full Stack",
  languages: "HTML, CSS, JavaScript, PHP",
  tools: "React, REDCap, MySQL, Redhat Openshift, Material UI, React Hook Form",
  liveLink: "https://learn.redcap.unc.edu/hub/",
  rightNav: "",
  rightLink: "",
  leftNav: "Bloom",
  leftLink: paths.develop.bloom,
};

const yOffset = -50;

export default function LearnHub() {
  const overviewRef = useRef();
  const featureRef = useRef();
  const [overviewIsActive, setOverviewIsActive] = useState(false);
  const [featureIsActive, setFeatureIsActive] = useState(false);

  // scroll to Overview section when sidenav clicked
  const overviewClickHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    const y =
      overviewRef.current.getBoundingClientRect().top + offset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setOverviewIsActive(true);
    setFeatureIsActive(false);
  };

  // scroll to Features section when sidenav clicked
  const featureClickHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    const y = featureRef.current.getBoundingClientRect().top + offset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setFeatureIsActive(true);
    setOverviewIsActive(false);
  };

  // detect which sidenav's navlink should be displayed active
  const scrollHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    if (
      offset + window.innerHeight >= overviewRef.current.offsetTop &&
      offset < overviewRef.current.offsetTop + overviewRef.current.clientHeight
    ) {
      // scrolled to Overview section
      setOverviewIsActive(true);
      setFeatureIsActive(false);
    } else if (
      offset + window.innerHeight >=
      featureRef.current.offsetTop + featureRef.current.clientHeight
    ) {
      // scrolled to Features section
      setOverviewIsActive(false);
      setFeatureIsActive(true);
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
      <Banner bannerImg={bannerImg} />
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
        activeColor="#6D97C8"
        inactiveColor="lightgray"
      />

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
            Learn Hub is a web application for clinical study teams to manage
            and submit requests for their REDCap projects. I developed the API
            for submitting REDCap requests in a more automated manner. I also
            worked on getting the application hosted on RedHat Openshift.
          </Overview>
        </AnimationOnScroll>

        {/* Feature #1 */}
        {/* Inspirations */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph
            subtitle="Feature"
            color={metadata.color}
            ref={featureRef}
          >
            <UList
              items={[
                "Before: users must go to the request form that's hosted on REDCap to submit their requests.",
                "After: users can go to Learn Hub and hit a button to submit a renew/expire access request for a particular user on a project.",
              ]}
            />
          </Paragraph>
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
