import ProjectCard from "../../components/ProjectCard/ProjectCard";

const designProjects = [
  {
    link: "/design/all-about-desserts",
    title: "All About Desserts",
    description: "Design spreads for a fictional recipe book",
    tools: "Adobe PS | Adobe AI | Adobe ID",
    color: "#CFB497",
    desktopImg: "Design/AllAboutDesserts/AllAboutDesserts_Card_Desktop.png",
    mobileImg: "Design/AllAboutDesserts/AllAboutDesserts_Card_Mobile.png",
  },
  {
    link: "/design/bon-voyage-and-far",
    title: "Bon Voyage & Far",
    description: "Design two related posters for a singer's songs",
    tools: "Adobe PS | Adobe AI | Adobe ID",
    color: "#C2D3EC",
    desktopImg: "Design/BonVoyageAndFar/BonVoyage_Card_Desktop.png",
    mobileImg: "Design/BonVoyageAndFar/BonVoyage_Card_Mobile.png",
  },
  {
    link: "/design/soup-restaurant",
    title: "Soup Restaurant",
    description: "Design a logo using type treatment",
    tools: "Adobe AI",
    color: "#CACACA",
    desktopImg: "Design/SoupRestaurant/Soup_Card_Desktop.png",
    mobileImg: "Design/SoupRestaurant/Soup_Card_Mobile.png",
  },
  {
    link: "/design/into-the-woods",
    title: "Into the Woods",
    description: "Redesign poster and playbill for a musical",
    tools: "Adobe AI | Adobe ID",
    color: "#CACACA",
    desktopImg: "Design/IntoTheWoods/IntoTheWoods_Card_Desktop.png",
    mobileImg: "Design/IntoTheWoods/IntoTheWoods_Card_Mobile.png",
  },
  {
    link: "/design/never-let-me-go",
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
    <section className="container d-flex flex-column align-items-center">
      {designProjects.map((project, index) => {
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
  );
}
