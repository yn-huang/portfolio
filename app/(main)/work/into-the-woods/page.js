'use client'

import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { paths } from "@/routes";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import Paragraph from "@/components/Paragraph";
import OneImgS from "@/components/OneImg/OneImgS";
import OneImgL from "@/components/OneImg/OneImgL";
// import Sidenav from "@/components/Sidenav";

import bannerImg from "@/public/images/Design/IntoTheWoods/IntoTheWoods_Banner.png";
import inspImg from '@/public/images/Design/IntoTheWoods/IntoTheWoods_PosterInspiration.jpg'
import mokeupImg from '@/public/images/Design/IntoTheWoods/IntoTheWoods_Mockup.png'

const metadata = {
  color: "gray",
  title: "Into the Woods",
  date: "Apr - May 2020",
  type: "Poster & Playbill Design",
  tools: "Adobe AI, ID",
  leftNav: "Soup Restaurant",
  leftLink: paths.design.soup_restaurant,
  rightNav: "Never Let Me Go",
  rightLink: paths.design.never_let_me_go,
};

const yOffset = -50;

export default function IntoTheWoods() {
  const overviewRef = useRef();
  const inspirationRef = useRef();
  const designThinkingRef = useRef();
  // const [overviewIsActive, setOverviewIsActive] = useState(false);
  // const [inspirationIsActive, setInspirationIsActive] = useState(false);
  // const [designThinkingIsActive, setDesignThinkingIsActive] = useState(false);

  // // scroll to Overview section when sidenav clicked
  // const overviewClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     overviewRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setOverviewIsActive(true);
  //   setDesignThinkingIsActive(false);
  //   setInspirationIsActive(false);
  // };

  // // scroll to Inspirations section when sidenav clicked
  // const inspirationClickHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   const y =
  //     inspirationRef.current.getBoundingClientRect().top + offset + yOffset;

  //   window.scrollTo({ top: y, behavior: "smooth" });

  //   setInspirationIsActive(true);
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
  //   setInspirationIsActive(false);
  // };

  // // detect which sidenav's navlink should be displayed active
  // const scrollHandler = () => {
  //   const offset = window.scrollY || window.pageYOffSet;
  //   if (
  //     offset + window.innerHeight >=
  //     designThinkingRef.current.offsetTop +
  //       designThinkingRef.current.clientHeight
  //   ) {
  //     // scrolled to Design Thinking
  //     setOverviewIsActive(false);
  //     setInspirationIsActive(false);
  //     setDesignThinkingIsActive(true);
  //   } else if (
  //     offset + window.innerHeight >=
  //       inspirationRef.current.offsetTop&&
  //     offset <
  //       inspirationRef.current.offsetTop + inspirationRef.current.clientHeight
  //   ) {
  //     // scrolled to Inspirations
  //     setInspirationIsActive(true);
  //     setDesignThinkingIsActive(false);
  //     setOverviewIsActive(false);
  //   } else if (
  //     offset + window.innerHeight >= overviewRef.current.offsetTop &&
  //     offset < overviewRef.current.offsetTop + overviewRef.current.clientHeight
  //   ) {
  //     // scrolled to Overview
  //     setOverviewIsActive(true);
  //     setDesignThinkingIsActive(false);
  //     setInspirationIsActive(false);
  //   } else {
  //     // scrolled to none of the above sections
  //     setOverviewIsActive(false);
  //     setDesignThinkingIsActive(false);
  //     setInspirationIsActive(false);
  //   }
  // };

  // //detect scroll event
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
            name: "Inspirations",
            clickHandler: inspirationClickHandler,
            active: inspirationIsActive,
          },
          {
            name: "Design Thinking",
            clickHandler: designThinkingClickHandler,
            active: designThinkingIsActive,
          },
        ]}
        activeColor="gold"
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
            The goal of this project is to redesign poster and playbill for a
            theater performance. I chose the musical{" "}
            <span className="italic">Into the Woods</span> to be my design
            subject.
          </Overview>
        </AnimationOnScroll>

        {/* Inspirations */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph
            subtitle="Inspirations"
            color={metadata.color}
            ref={inspirationRef}
          >
            <p>
              For the poster design, I was inspired by the typical tropical
              design layout, where all decorations are placed around the title
              with ends pointing towards the center.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Inspirations Image */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <OneImgS img={inspImg} imgAlt='Into the Woods Inspiration' unoptimized />
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
            <p>
              The musical has dark fairytale vibe. So instead of having tropical
              leaves, I placed bare tree silhouettes at the top and the bottom
              of the poster to build a gloomy and oppressive atmosphere. I also
              used a blackletter typeface for the title to further emphasize
              this idea.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Final Mockup */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <OneImgL img={mokeupImg} imgAlt='Into the Woods Mockup' unoptimized/>
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
