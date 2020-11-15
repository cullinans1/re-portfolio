import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Page from "./components/Page";
import "./App.css";
import Portfolio from "./components/Portfolio";

function App() {
  const [pages] = useState([
    {
      name: "About Me",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header></Header>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <Portfolio></Portfolio>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

export default App;
