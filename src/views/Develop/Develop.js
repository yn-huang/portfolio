import ProjectCard from "../../components/ProjectCard/ProjectCard";

const developProjects = [
  {
    link: "/develop/soup-restaurant",
    title: "Online Menu Ordering",
    description: "A website model for a fictional restaurant's online ordering",
    tools: "JS | React | Redux",
    color: "#91a87e",
    desktopImg:
      "Develop/SoupRestaurant/SoupRestaurant_Develop_Card_Desktop.png",
    mobileImg: "Develop/SoupRestaurant/SoupRestaurant_Develop_Card_Mobile.png",
  },
  {
    link: "/develop/gateway",
    title: "Educational Forum",
    description: "A website model for hosting student and parent resources",
    tools: "Rest API | JS | Express | Node | MongoDB | AWS S3",
    color: "#d1d4da",
    desktopImg: "Develop/Gateway/Gateway_Card_Desktop.png",
    mobileImg: "Develop/Gateway/Gateway_Card_Mobile.png",
  },
];

export default function Develop() {
  return (
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
  );
}
