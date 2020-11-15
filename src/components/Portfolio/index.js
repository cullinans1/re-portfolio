import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  //array with projects in it
  const [projects] = useState([
    {
      name: "azino",
      displayName: "Azino",
      description: "MERN Stack",
      link: "http://enigmatic-sands-19183.herokuapp.com/",
      repo: "https://github.com/cullinans1/azino-athletics",
    },
    {
      name: "techblog",
      displayName: "The Tech Blog",
      description: "Full Stack: Express.js/SQL",
      link: "https://peaceful-peak-03942.herokuapp.com/",
      repo: "https://github.com/cullinans1/tech-blog",
    },
    {
      name: "ems",
      displayName: "Employee Management System",
      description: "Full Stack: SQL",
      link: "https://fast-everglades-76261.herokuapp.com/",
      repo: "https://github.com/cullinans1/employee-management-system",
    },
    {
      name: "planahike",
      displayName: "Plan A Hike",
      description: "HTML/CSS/JavaScript/AJAX",
      link: "https://cullinans1.github.io/Plan-A-hike/",
      repo: "https://github.com/cullinans1/PlanAHike",
    },
    {
      name: "runbuddy",
      displayName: "Run Buddy",
      description: "HTML/CSS",
      link: "https://cullinans1.github.io/run-buddy/",
      repo: "https://github.com/cullinans1/run-buddy",
    },
  ]);
  return (
    <div>
      <div className="container-fluid">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
