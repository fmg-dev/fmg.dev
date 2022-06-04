import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./about.scss";

function About() {
  return (
    <div className="about">
      <div id="about" className="about__left">
        <div className="about__left__text">
          <h1>Hey there, I'm Fatih</h1>
          <p>I'm a front-end developer. I develop projects with React.</p>
        </div>
        <div className="about__left__buttons">
          <a href="./FatihMehmetGünFrontendCv.pdf" download>
            <button>CV</button>
          </a>

          <a href="https://github.com/fmg-dev" target={"_blank"}>
            <button>Github</button>
          </a>
        </div>
      </div>
      <div className="about__img">
        <img src="./image/me.jpg" alt="" />
      </div>
      <div className="about__list">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/fatih-mehmet-g%C3%BCn-81ab761b8/"
              target={"_blank"}
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fmgdev_/" target={"_blank"}>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/fmgdev_" target={"_blank"}>
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
