import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./contact.scss";
function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__list">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/fatih-mehmet-g%C3%BCn-81ab761b8/" target={"_blank"}>
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
          <li>
            <a href="https://github.com/fmg-dev" target={"_blank"}>
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
