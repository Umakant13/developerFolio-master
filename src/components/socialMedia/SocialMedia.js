import React from "react";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.scss";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}



      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}
      

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

{socialMediaLinks.leetcode ? (
        <a
          href={socialMediaLinks.leetcode}
          className="icon-button leetcode"
          target="_blank"
          rel="noopener noreferrer"
        >
    <i className="fas fa-code"></i>

          <span></span>
        </a>
      ) : null}
      
      {socialMediaLinks.geeksforgeeks ? (
        <a
          href={socialMediaLinks.geeksforgeeks}
          className="icon-button geeksforgeeks"
          target="_blank"
          rel="noopener noreferrer"
        >
    <i className="fas fa-laptop-code"></i> {/* Note: Use 'fas' for solid icons */}
          <span></span>
        </a>
      ) : null}
      
    </div>
  );
}
