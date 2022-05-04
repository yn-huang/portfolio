import { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Banner from "../../components/Banner/Banner";
import Overview from "../../components/Overview/Overview";
import Footnav from "../../components/Footnav/Footnav";
import TextImgR from "../../components/TextImg/TextImgR";
import TextImgL from "../../components/TextImg/TextImgL";
import UList from "../../components/List/UList";
import OList from "../../components/List/OList";
import Sidenav from "../../components/Sidenav/Sidenav";

const metadata = {
  bannerImg: "Develop/Gateway/Gateway_Banner.png",
  color: "#5F697F",
  title: "Educational Forum",
  date: "Feb 2022",
  type: "Full Stack",
  languages: "HTML, CSS, JavaScript",
  tools: "Express, Node, MongoDB, AWS S3, Heroku",
  liveLink: "https://intense-dawn-36904.herokuapp.com/",
  rightNav: "",
  rightLink: "",
  leftNav: "Online Menu Ordering",
  leftLink: "/develop/soup-restaurant",
};

const yOffset = -50;

export default function Gateway() {
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
        activeColor="#178754"
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
            A website model for hosting student and parent resources. I
            developed a student forum feature for program-related discussion by
            implementing RESTful API using Express framework (MVC).
          </Overview>
        </AnimationOnScroll>

        {/* Feature #1 */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TextImgR
            title="Features"
            subtitle="1. Login & Sign Up"
            img="Develop/Gateway/Gateway_LoginSignup.gif"
            color={metadata.color}
            ref={featureRef}
          >
            <UList
              items={[
                "Implemented Passport to serve as the authentication middleware and to maintain login sessions.",
                "Added the Passport-Local Mongoose package for building username and password login with Passport",
              ]}
            />
          </TextImgR>
        </AnimationOnScroll>

        {/* Feature #2 */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TextImgL
            subtitle="2. Make New Post"
            img="Develop/Gateway/Gateway_NewPost.gif"
            color={metadata.color}
          >
            <UList
              items={[
                "Implemented Multer to upload image to AWS S3.",
                "Delivered asynchronous API calls (AJAX) through NodeJS for accessing images hosted on AWS S3.",
              ]}
            />
          </TextImgL>
        </AnimationOnScroll>

        {/* Feature #3 */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TextImgR
            subtitle="3. Edit Post"
            img="Develop/Gateway/Gateway_EditPost.gif"
            color={metadata.color}
          >
            <UList
              items={[
                "Sent request to AWS S3 for deleting object(s) selected by the user.",
              ]}
            />
          </TextImgR>
        </AnimationOnScroll>

        {/* Feature #4 */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TextImgL
            subtitle="4. Make New Comment"
            img="Develop/Gateway/Gateway_NewComment.gif"
            color={metadata.color}
          >
            <UList
              items={[
                "If no comment was found, the comment section will display a text.",
                "Every comment has a reply button. If a user owns the comment, they will see an additional delete button.",
              ]}
            />
          </TextImgL>
        </AnimationOnScroll>

        {/* Feature #5 */}
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
          <TextImgR
            subtitle="5. Reply Comment"
            img="Develop/Gateway/Gateway_ReplyComment.gif"
            color={metadata.color}
          >
            <p className="mb-3">
              Implemented event listeners to the reply button:
            </p>
            <OList
              items={[
                "If the textarea for reply is empty, the button is going to act as a toggler.",
                "If the textarea is not empty, the button will submit the form once pressed.",
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
