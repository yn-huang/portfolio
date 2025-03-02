"use client";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ArrowDropUp } from "@mui/icons-material";

import { paths } from "@/routes";
import bannerImg from "@/public/images/Develop/Bloom/Bloom_Banner.png";
import Banner from "@/components/Banner";
import Overview from "@/components/Overview";
import Footnav from "@/components/Footnav";
import TwoImg from "@/components/TwoImg";
import Paragraph from "@/components/Paragraph";
import OneImgM from "@/components/OneImg/OneImgM";

import StudyTableImg from "@/public/images/Develop/Bloom/Bloom_Study_Table.png";
import StudyTableAfterImg from "@/public/images/Develop/Bloom/Bloom_Study_Table_After.png";
import ProcessMapImg from "@/public/images/Develop/Bloom/Bloom_Process_Map.png";
import ProcessMapAfterImg from "@/public/images/Develop/Bloom/Bloom_Process_Map_After.png";
import AccessibilityImg from "@/public/images/Develop/Bloom/Bloom_Accessibility.gif";

const metadata = {
  color: "#5F697F",
  title: "Bloom",
  date: "Feb 2024 - Aug 2024",
  type: "Full Stack, UI/UX Design",
  languages: "JavaScript",
  tools: "React.js, Next.js, Material UI, Figma",
  liveLink: "https://bloom.crso.unc.edu/",
  liveLinkDescription: "(only available to UNC and UNC-Health accounts)",
  rightNav: "Bon Voyage & Far",
  rightLink: paths.work.bon_voyage_and_far,
  leftNav: "",
  leftLink: "",
};

export default function Bloom() {
  return (
    <main>
      <Banner bannerImg={bannerImg} />

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
          >
            Bloom is an award-winning process mapping web application that
            assists research teams in understanding and navigating the steps
            required to initiate clinical research studies (
            <a href="https://www.centerwatch.com/articles/26591-uncs-study-startup-mapping-tool-wins-wcg-innovation-challenge">
              Innovation Challenge at the 2023 MAGI East Clinical Research
              Conference
            </a>
            ). I overhauled the application by migrating from Create React App
            to Next.js and redesigning the user interface.
          </Overview>
        </AnimationOnScroll>

        {/* 1. CRA to Next.js */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="CRA to Next.js" color={metadata.color}>
            <p className="mb-3">
              Since Create React App (CRA) was no longer the recommended
              approach for building React applications, I proposed migrating
              Bloom to the Next.js framework. We considered using Vite instead,
              as it offered an easier migration path for the existing app.
              However, we ultimately chose Next.js due to its Server-Side
              Rendering (SSR) capabilities, which greatly enhance performance
              and reduce initial load times.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* 2. Theming */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="Theming" color={metadata.color}>
            <p className="mb-3">
              To ensure a cohesive UI design, I used Material UI (MUI) for theme
              customization. The MUI theme provider enables seamless transitions
              between themes. I created both a default theme and an
              accessibility-focused theme, incorporating color choices that are
              more accommodating for color blind users.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <OneImgM
            img={AccessibilityImg}
            imgAlt="Accessibility Theme Toggle"
            unoptimized
          />
        </AnimationOnScroll>

        {/* 3. Design */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="Design" color={metadata.color}>
            <p className="mb-3">
              {`Another objective of this overhaul is to improve the user experience, with the aim of retaining more active users in the application.`}
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* 4. My Studies Page */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="My Studies Page" color={metadata.color}>
            <p className="mb-3">
              {`The initial design presented information scattered across the table, making navigation overwhelming for users. 
              To improve clarity, I relocated non-essential details, like the study description and collaborators, to a dedicated "Study Details" page. 
              Additionally, I nested the delete process map button under an ellipsis icon to prevent accidental clicks.`}
            </p>
          </Paragraph>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TwoImg
            img1={StudyTableImg}
            img2={StudyTableAfterImg}
            img1Alt="Study Table Before Redesign"
            img2Alt="Study Table After Redesign"
            unoptimized
          />
        </AnimationOnScroll>

        {/* 5. Process Map Page */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="Process Map Page" color={metadata.color}>
            <p className="mb-3">
              The left navigation bar took up too much space, so I relocated it
              to the top of the page to free up horizontal space. Additionally,
              I introduced two side panels for the checklist and node
              descriptions, which can overlay the process map. Users can now
              zoom in and out of the process map using the mouse scroll,
              eliminating the need to scroll the entire page to adjust their
              view.
            </p>
          </Paragraph>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <TwoImg
            img1={ProcessMapImg}
            img2={ProcessMapAfterImg}
            img1Alt="Process Map Before Redesign"
            img2Alt="Process Map After Redesign"
            unoptimized
          />
        </AnimationOnScroll>

        {/* 6. Metrics */}
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={1.5}
        >
          <Paragraph subtitle="Metrics" color={metadata.color}>
            <p className="mb-3">
              <ArrowDropUp color="success" />
              30% increase in active users
            </p>
          </Paragraph>
        </AnimationOnScroll>

        {/* Feature #1 */}
        {/* <AnimationOnScroll
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
        </AnimationOnScroll> */}
        {/* Feature #2 */}
        {/* <AnimationOnScroll
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
        </AnimationOnScroll> */}
        {/* Feature #3 */}
        {/* <AnimationOnScroll
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
        </AnimationOnScroll> */}

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
