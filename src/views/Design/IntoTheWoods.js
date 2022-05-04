import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Banner from "../../components/Banner/Banner";
import Overview from "../../components/Overview/Overview";
import Footnav from "../../components/Footnav/Footnav";
import Paragraph from "../../components/Paragraph/Paragraph";
import OneImgS from "../../components/OneImg/OneImgS";
import OneImgL from "../../components/OneImg/OneImgL";
import Sidenav from "../../components/Sidenav/Sidenav";

const metadata = {
  bannerImg: "Design/IntoTheWoods/IntoTheWoods_Banner.png",
  color: "gray",
  title: "Into the Woods",
  date: "Apr - May 2020",
  type: "Poster & Playbill Design",
  tools: "Adobe AI, ID",
  leftNav: "Soup Restaurant",
  leftLink: "/design/soup-restaurant",
  rightNav: "Never Let Me Go",
  rightLink: "/design/never-let-me-go",
};

const yOffset = -50;

export default function IntoTheWoods() {
  const overviewRef = useRef();
  const inspirationRef = useRef();
  const designThinkingRef = useRef();
  const [overviewIsActive, setOverviewIsActive] = useState(false);
  const [inspirationIsActive, setInspirationIsActive] = useState(false);
  const [designThinkingIsActive, setDesignThinkingIsActive] = useState(false);

  // scroll to Overview section when sidenav clicked
  const overviewClickHandler = () => {
    const y =
      overviewRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setOverviewIsActive(true);
    setDesignThinkingIsActive(false);
    setInspirationIsActive(false);
  };

  // scroll to Inspirations section when sidenav clicked
  const inspirationClickHandler = () => {
    const y =
      inspirationRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setInspirationIsActive(true);
    setOverviewIsActive(false);
    setDesignThinkingIsActive(false);
  };

  // scroll to Design Thinking section when sidenav clicked
  const designThinkingClickHandler = () => {
    const y =
      designThinkingRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setDesignThinkingIsActive(true);
    setOverviewIsActive(false);
    setInspirationIsActive(false);
  };

  // detect which sidenav's navlink should be displayed active
  const scrollHandler = () => {
    if (
      window.pageYOffset + window.innerHeight >=
      designThinkingRef.current.offsetTop +
        designThinkingRef.current.clientHeight
    ) {
      // scrolled to Design Thinking
      setOverviewIsActive(false);
      setInspirationIsActive(false);
      setDesignThinkingIsActive(true);
    } else if (
      window.pageYOffset + window.innerHeight >=
        inspirationRef.current.offsetTop +
          inspirationRef.current.clientHeight &&
      window.pageYOffset <
        inspirationRef.current.offsetTop + inspirationRef.current.clientHeight
    ) {
      // scrolled to Inspirations
      setInspirationIsActive(true);
      setDesignThinkingIsActive(false);
      setOverviewIsActive(false);
    } else if (
      window.pageYOffset + window.innerHeight >=
        overviewRef.current.offsetTop &&
      window.pageYOffset <
        overviewRef.current.offsetTop + overviewRef.current.clientHeight
    ) {
      // scrolled to Overview
      setOverviewIsActive(true);
      setDesignThinkingIsActive(false);
      setInspirationIsActive(false);
    } else {
      // scrolled to none of the above sections
      setOverviewIsActive(false);
      setDesignThinkingIsActive(false);
      setInspirationIsActive(false);
    }
  };

  //detect scroll event
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
            The goal of this project is to redesign poster and playbill for a
            theater performance. I chose the musical{" "}
            <span className="italic">Into the Woods</span> to be my design
            subject.
          </Overview>
        </AnimationOnScroll>

        {/* Inspirations */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
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
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <OneImgS img="Design/IntoTheWoods/IntoTheWoods_PosterInspiration.jpg" />
        </AnimationOnScroll>

        {/* Design Thinking */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
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
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <OneImgL img="Design/IntoTheWoods/IntoTheWoods_Mockup.png" />
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
