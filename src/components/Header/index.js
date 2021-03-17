import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="flex">
        <h1 className="mytitle">Sammy Cullinan</h1>
        <h4 className="lead mytitle"> Full-stack Web Developer</h4>
        <a href="https://github.com/cullinans1" target="_blank">
          <button className="btn btn-lg btn-outline-dark">
            <i className="fab fa-github fa-lg"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
