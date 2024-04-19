import ProjectCard from "@/components/ProjectCard";
import { paths } from "@/routes";

const developProjects = [
  {
    // link: paths.design.bloom,
    title: "Bloom UI/UX Redesign [Work in Progress]",
    description:
      "Redesign user interface based on user feedback on the previous Bloom version",
    tools: "Figma",
    color: "#d1d4da",
    desktopImg: "Design/Lock_Card_Desktop.png",
    mobileImg: "Design/Lock_Card_Mobile.png",
  },
  {
    link: paths.design.bon_voyage_and_far,
    title: "Bon Voyage & Far",
    description: "Design two related posters for a singer's songs",
    tools: "Adobe PS | Adobe AI | Adobe ID",
    color: "#C2D3EC",
    desktopImg: "Design/BonVoyageAndFar/BonVoyage_Card_Desktop.png",
    mobileImg: "Design/BonVoyageAndFar/BonVoyage_Card_Mobile.png",
  },
  {
    link: paths.design.soup_restaurant,
    title: "Soup Restaurant",
    description: "Design a logo using type treatment",
    tools: "Adobe AI",
    color: "#CACACA",
    desktopImg: "Design/SoupRestaurant/Soup_Card_Desktop.png",
    mobileImg: "Design/SoupRestaurant/Soup_Card_Mobile.png",
  },
  {
    link: paths.design.into_the_woods,
    title: "Into the Woods",
    description: "Redesign poster and playbill for a musical",
    tools: "Adobe AI | Adobe ID",
    color: "#CACACA",
    desktopImg: "Design/IntoTheWoods/IntoTheWoods_Card_Desktop.png",
    mobileImg: "Design/IntoTheWoods/IntoTheWoods_Card_Mobile.png",
  },
  {
    link: paths.design.never_let_me_go,
    title: "Never Let Me Go",
    description: "Redesign a book's cover",
    tools: "Adobe ID",
    color: "#C3B2B3",
    desktopImg: "Design/NeverLetMeGo/NeverLetMeGo_Card_Desktop.png",
    mobileImg: "Design/NeverLetMeGo/NeverLetMeGo_Card_Mobile.png",
  },
];

export default function Design() {
  return (
    <main>
      <section className="container d-flex flex-column align-items-center">
        {developProjects.map((project, index) => {
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
