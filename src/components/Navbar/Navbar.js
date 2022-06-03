import React, { useEffect, useState } from "react";
import "./navbar.scss";
function Navbar() {


  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <section className="navbar__nav__name">
          <h1>
            <a href="/">Fatih Mehmet GÜN</a>
          </h1>
        </section>
        {/* <section className="navbar__nav__list">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </section> */}
        {/* <section></section> */}
      </nav>
    </div>
  );
}

export default Navbar;
