"use client";

import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { paths } from "@/routes";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import Paragraph from "@/components/Paragraph";
import TwoImg from "@/components/TwoImg";
import FourImg from "@/components/FourImg";
import Sidenav from "@/components/Sidenav";

import bannerImg from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Banner.png";
import insp1Img from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration1.png";
import insp2Img from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration2.png";
import insp3Img from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration3.png";
import insp4Img from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration4.png";
import final1Img from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Final1.png";
import final2Img from "@/public/images/Design/BonVoyageAndFar/BonVoyageAndFar_Final2.png";

const metadata = {
  color: "#5480BD",
  title: "Bon Voyage & Far",
  date: "Oct 2020",
  type: "Poster Design",
  tools: "Adobe PS",
  leftNav: "",
  leftLink: "",
  rightNav: "Soup Restaurant",
  rightLink: paths.design.soup_restaurant,
};

const yOffset = -50;

export default function BonVoyageAndFar() {
  const overviewRef = useRef();
  const inspirationRef = useRef();
  const designThinkingRef = useRef();
  const [overviewIsActive, setOverviewIsActive] = useState(false);
  const [inspirationIsActive, setInspirationIsActive] = useState(false);
  const [designThinkingIsActive, setDesignThinkingIsActive] = useState(false);

  // scroll to Overview section when sidenav clicked
  const overviewClickHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    const y =
      overviewRef.current.getBoundingClientRect().top + offset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setOverviewIsActive(true);
    setDesignThinkingIsActive(false);
    setInspirationIsActive(false);
  };

  // scroll to Inspirations section when sidenav clicked
  const inspirationClickHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    const y =
      inspirationRef.current.getBoundingClientRect().top + offset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setInspirationIsActive(true);
    setOverviewIsActive(false);
    setDesignThinkingIsActive(false);
  };

  // scroll to Design Thinking section when sidenav clicked
  const designThinkingClickHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    const y =
      designThinkingRef.current.getBoundingClientRect().top + offset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setDesignThinkingIsActive(true);
    setOverviewIsActive(false);
    setInspirationIsActive(false);
  };

  // detect which sidenav's navlink should be displayed active
  const scrollHandler = () => {
    const offset = window.scrollY || window.pageYOffSet;
    if (
      offset + window.innerHeight >=
      designThinkingRef.current.offsetTop +
        designThinkingRef.current.clientHeight
    ) {
      // scrolled to Design Thinking
      setOverviewIsActive(false);
      setInspirationIsActive(false);
      setDesignThinkingIsActive(true);
    } else if (
      offset + window.innerHeight >=
        inspirationRef.current.offsetTop &&
      offset <
        inspirationRef.current.offsetTop + inspirationRef.current.clientHeight
    ) {
      // scrolled to Inspirations
      setInspirationIsActive(true);
      setDesignThinkingIsActive(false);
      setOverviewIsActive(false);
    } else if (
      offset + window.innerHeight >= overviewRef.current.offsetTop &&
      offset < overviewRef.current.offsetTop + overviewRef.current.clientHeight
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
        activeColor="#d9aebe"
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
            ref={overviewRef}
          >
            The goal of this project is to design two posters that are related.
            I decided to work on the songs that the K-pop idol YooA released for
            her solo debut.
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
            <p className="mb-3">
              I chose the songs <span className="italic">Bon Voyage</span> and{" "}
              <span className="italic">Far</span> to be my design subjects. The
              theme of the <span className="italic">Bon Voyage</span> MV is
              about YooA being the daughter of nature. The song also has
              ethereal and natural vibes. One of the shots is YooA walking
              through a dark forest, where a blue light shines through the
              woods, which is my inspiration for the{" "}
              <span className="italic">Bon Voyage</span> poster.
            </p>
            <p>
              I got the inspiration for the <span className="italic">Far</span>{" "}
              poster from the lyrics of the song. YooA mentioned that she wants
              to get far away to a beach where no one knows. This song is about
              her trying to find her true self by resonating with the ocean. The
              alternative name of this song,{" "}
              <span className="italic">Find Me</span>, also foreshadows the
              theme.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Inspirations Images */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <FourImg
            img1={insp1Img}
            img2={insp2Img}
            img3={insp3Img}
            img4={insp4Img}
            img1Alt="Bon Voyage and Far Inspiration 1"
            img2Alt="Bon Voyage and Far Inspiration 2"
            img3Alt="Bon Voyage and Far Inspiration 3"
            img4Alt="Bon Voyage and Far Inspiration 4"
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
              I found this blue mountain photo for the{" "}
              <span className="italic">Bon Voyage</span> poster that corresponds
              with the MV shot I described earlier. I layered the forest on top
              of the title that I typed along the treetops. It looks as if the
              title is running through the woods.
            </p>
            <p>
              Since the lyrics mentioned finding true self in the ocean, I used
              a beach photo in birds-eye-view for the{" "}
              <span className="italic">Far</span> poster. The way I placed the
              title is similar to what I did for the{" "}
              <span className="italic">Bon Voyage</span> poster. In contrast, it
              creates a visual a visual effect of looking down into the ocean
              and seeing reflections.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Final */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TwoImg
            img1={final1Img}
            img2={final2Img}
            img1Alt="Bon Voyage and Far Final 1"
            img2Alt="Bon Voyage and Far Final 2"
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
