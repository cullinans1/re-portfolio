import React, { useEffect } from "react";

function Nav(props) {

  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        {pages.map((Page) => (
          <li
            className={`nav-link ${currentPage.name === Page.name && "active"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
