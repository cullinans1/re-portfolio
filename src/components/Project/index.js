import React from "react";

function Project({ project }) {
  const { name, displayName, description, link, repo } = project;

  return (
    <div className="project col-12 col-lg-4" key="name">
        {/* load corresponding image for each project */}
      <img
        src={require(`../../assets/projects/${name}.png`)}
        alt={displayName}
        className="project-img"
      />
      <div className="project-text">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">{displayName}</a>{" "}
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
