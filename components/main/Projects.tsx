import React from "react";
import ProjectCard from "../sub/ProjectCard";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
        <ProjectCard
          src="/1.png"
          title="Crud Application"
          description="A React application which allows user to easily perform the crud operations put, post, patch, delete on the data"
        />
        <ProjectCard
          src="/2.png"
          title="Authenication Application"
          description="A React Application which allows to authenticate the user account in other words a login signup form"
          />
        <ProjectCard
          src="/3.jpg"
          title="Unversity Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;