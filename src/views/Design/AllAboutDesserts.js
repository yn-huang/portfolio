import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Banner from "../../components/Banner/Banner";
import Overview from "../../components/Overview/Overview";
import Footnav from "../../components/Footnav/Footnav";
import Paragraph from "../../components/Paragraph/Paragraph";
import TwoImg from "../../components/TwoImg/TwoImg";
import Sidenav from "../../components/Sidenav/Sidenav";

const metadata = {
  bannerImg: "Design/AllAboutDesserts/AllAboutDesserts_Banner.png",
  color: "#6D3518",
  title: "All About Desserts",
  date: "Nov - Dec 2020",
  type: "Book Spread Design",
  tools: "Adobe PS, AI, ID",
  leftNav: "",
  leftLink: "",
  rightNav: "Bon Voyage & Far",
  rightLink: "/design/bon-voyage-and-far",
};

const yOffset = -50;

export default function AllAboutDesserts() {
  const overviewRef = useRef();
  const designThinkingRef = useRef();
  const [overviewIsActive, setOverviewIsActive] = useState(false);
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
  };

  // detect which sidenav's navlink should be displayed active
  const scrollHandler = () => {
    if (
      window.pageYOffset + window.innerHeight >=
      designThinkingRef.current.offsetTop +
        designThinkingRef.current.clientHeight
    ) {
      // scrolled to Design Thinking section
      setOverviewIsActive(false);
      setDesignThinkingIsActive(true);
    } else if (
      window.pageYOffset + window.innerHeight >=
        overviewRef.current.offsetTop &&
      window.pageYOffset <
        overviewRef.current.offsetTop + overviewRef.current.clientHeight
    ) {
      // scrolled to Overview section
      setOverviewIsActive(true);
      setDesignThinkingIsActive(false);
    } else {
      // scrolled to none of the above sections
      setOverviewIsActive(false);
      setDesignThinkingIsActive(false);
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
            name: "Design Thinking",
            clickHandler: designThinkingClickHandler,
            active: designThinkingIsActive,
          },
        ]}
        activeColor="#c99d62"
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
            The goal of this project is to design two spreads of an imaginary
            cookbook. The spreads should contain two recipes of the same
            cuisine. I came up with this cookbook called{" "}
            <span className="italic">All About Desserts</span>, a collection of
            dessert recipes from worldwide. The spreads I worked on are from the
            Italian Desserts section of the book. For the recipes, I chose
            tiramisu and affogato.
          </Overview>
        </AnimationOnScroll>

        {/* Design Thinking */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <Paragraph
            subtitle="Design Thinking"
            color={metadata.color}
            ref={designThinkingRef}
          >
            <p className="mb-3">
              I decided to design the spreads in a relaxed hand-drawn style. So,
              I treated the dessert images using the image trace function in
              Adobe Illustrator, which gave this hand-drawn look. The rest was
              playing with borders, decorations, and headings around the image.
            </p>
            <p>
              I made my final decision to place a circle border around the
              dessert images to reference clock countdowns. I also have placed
              time and serving sizes in circles to emphasize this idea.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Final Mockup */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TwoImg
            img1="Design/AllAboutDesserts/AllAboutDesserts_Mockup1.png"
            img2="Design/AllAboutDesserts/AllAboutDesserts_Mockup2.png"
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
