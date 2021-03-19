import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="flex">
        <div className="intro-text">
          <h1 className=""> Hi, I am </h1>
        </div>

        <h1 className="mytitle">Sammy Cullinan</h1>
        <div className="intro-text">
          <h4 className=" lead mytitle">And I am a</h4>
        </div>

        <h4 className="lead mytitle"> Full-stack Web Developer</h4>
        <a href="https://github.com/cullinans1" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-lg btn-outline-dark">
            <i className="fab fa-github fa-lg"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
