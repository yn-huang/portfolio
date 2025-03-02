import ProjectCard from "@/components/ProjectCard";
import { paths } from "@/routes";

const projects = [
  {
    link: paths.work.bloom,
    title: "Bloom",
    description:
      "An award-winning process mapping web application that assists research teams in understanding and navigating the steps required to initiate clinical research studies",
    tools: "React | Next.js | Material UI | Figma",
    color: "#d5e1e8",
    desktopImg: "Develop/Bloom/Bloom_Card_Desktop.png",
    mobileImg: "Develop/Bloom/Bloom_Card_Mobile.png",
  },
  {
    link: paths.work.bon_voyage_and_far,
    title: "Bon Voyage & Far",
    description: "Design two related posters for a singer's songs",
    tools: "Adobe PS | Adobe AI | Adobe ID",
    color: "#dee9fa",
    desktopImg: "Design/BonVoyageAndFar/BonVoyage_Card_Desktop.png",
    mobileImg: "Design/BonVoyageAndFar/BonVoyage_Card_Mobile.png",
  },
  {
    link: paths.work.soup_restaurant,
    title: "Soup Restaurant",
    description: "Design a logo using type treatment",
    tools: "Adobe AI",
    color: "#CACACA",
    desktopImg: "Design/SoupRestaurant/Soup_Card_Desktop.png",
    mobileImg: "Design/SoupRestaurant/Soup_Card_Mobile.png",
  },
  {
    link: paths.work.into_the_woods,
    title: "Into the Woods",
    description: "Redesign poster and playbill for a musical",
    tools: "Adobe AI | Adobe ID",
    color: "#CACACA",
    desktopImg: "Design/IntoTheWoods/IntoTheWoods_Card_Desktop.png",
    mobileImg: "Design/IntoTheWoods/IntoTheWoods_Card_Mobile.png",
  },
  {
    link: paths.work.never_let_me_go,
    title: "Never Let Me Go",
    description: "Redesign a book's cover",
    tools: "Adobe ID",
    color: "#e3cfd0",
    desktopImg: "Design/NeverLetMeGo/NeverLetMeGo_Card_Desktop.png",
    mobileImg: "Design/NeverLetMeGo/NeverLetMeGo_Card_Mobile.png",
  },
];

export default function Develop() {
  return (
    <main>
      <section className="container d-flex flex-column align-items-center">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              link={project.link}
              title={project.title}
              description={project.description}
              tools={project.tools}
              color={project.color}
              desktopImg={project.desktopImg}
              mobileImg={project.mobileImg}
            />
          );
        })}
      </section>
    </main>
  );
}
