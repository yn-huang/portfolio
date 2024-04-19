import ProjectCard from "@/components/ProjectCard";
import { paths } from "@/routes";

const developProjects = [
  {
    link: paths.develop.bloom,
    title: "Bloom",
    description:
      "An award-winning process mapping SPA that assists research teams in understanding and navigating the steps required to initiate clinical research studies",
    tools: "React | Express | Neo4j | Material UI | SAML | Next.js",
    color: "#d1d4da",
    desktopImg:
      "Develop/Bloom/Bloom_Card_Desktop.png",
    mobileImg: "Develop/Bloom/Bloom_Card_Mobile.png",
  },
  {
    link: paths.develop.learn_hub,
    title: "Learn Hub",
    description: "A web app for clinical study teams to manage and submit requests for their REDCap projects",
    tools: "React | PHP | REDCap | MySQL | Redhat Openshift | Material UI",
    color: "#6D97C8",
    desktopImg: "Develop/LearnHub/Learn_Hub_Card_Desktop.png",
    mobileImg: "Develop/LearnHub/Learn_Hub_Card_Mobile.png",
  },
];

export default function Develop() {
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
