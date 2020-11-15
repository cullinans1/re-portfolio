import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <canvas className="background"></canvas>
        <h1>Samuel Cullinan</h1>
        <p className="lead"> Full Stack Developer</p>
        <button className='btn btn-lg btn-outline-dark'>
        <i class="fab fa-github fa-lg"></i>
        </button>
    </div>
  );
}

export default Header;
