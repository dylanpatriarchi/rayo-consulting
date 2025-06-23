import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-16 md:py-20 text-center px-4">
        Progetti che generano risultati concreti
      </h1>
      <div className="h-full w-full flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
