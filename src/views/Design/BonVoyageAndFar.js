import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Banner from "../../components/Banner/Banner";
import Overview from "../../components/Overview/Overview";
import Footnav from "../../components/Footnav/Footnav";
import Paragraph from "../../components/Paragraph/Paragraph";
import TwoImg from "../../components/TwoImg/TwoImg";
import FourImg from "../../components/FourImg/FourImg";
import Sidenav from "../../components/Sidenav/Sidenav";

const metadata = {
  bannerImg: "Design/BonVoyageAndFar/BonVoyageAndFar_Banner.png",
  color: "#5480BD",
  title: "Bon Voyage & Far",
  date: "Oct 2020",
  type: "Poster Design",
  tools: "Adobe PS",
  leftNav: "All About Desserts",
  leftLink: "/design/all-about-desserts",
  rightNav: "Soup Restaurant",
  rightLink: "/design/soup-restaurant",
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
            img1="Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration1.png"
            img2="Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration2.png"
            img3="Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration3.png"
            img4="Design/BonVoyageAndFar/BonVoyageAndFar_Inspiration4.png"
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
            img1="Design/BonVoyageAndFar/BonVoyageAndFar_Final1.png"
            img2="Design/BonVoyageAndFar/BonVoyageAndFar_Final2.png"
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
