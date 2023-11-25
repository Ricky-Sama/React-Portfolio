import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

// Social Media 
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Ricky-Sama",
    icon: faGithub,
    color: "#5DE512",
  },
];

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
        <h5 className="designer-text">Designed with ⏳ by Ricardo Scuotto</h5>
        </section>
      </div>
    </footer>
  );
};

// Export Footer
export default Footer;