import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <canvas className="background"></canvas>
      <div className="flex">
        <h1 className="mytitle">Samuel Cullinan</h1>
        <h4 className="lead mytitle"> Full-stack Web Developer</h4>
        <button className="btn btn-lg btn-outline-dark">
          <i className="fab fa-github fa-lg"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
