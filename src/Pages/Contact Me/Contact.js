import React from "react";
import "./ContactStyle.css";
// import gsap from "gsap";
// import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
// import { useEffect, useRef } from "react/cjs/react.development";

function Contact() {
  return (
    <div className="contactPage" id="contact-page">
      <div className="heading">
        <span>Contact</span>
        <span> Me</span>
      </div>
      <div className="specification">
        <a
          href="mailto:prajwalpadal19@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <div className="spec-mailme">
            <span>Mail Me</span>
          </div>
        </a>
        <div className="spec-sm-tray">
          <div className="sm-container"></div>{" "}
          <span>
            <a
              className="socialIcon"
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/prajwa_lit/"
            >
              Instagram
            </a>
          </span>
          <span>
            <a
              className="socialIcon"
              style={{ textDecoration: "none", color: "white" }}
              href="https://twitter.com/padal_prajwal"
            >
              Twitter
            </a>
          </span>
          <span>
            <a
              className="socialIcon"
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.linkedin.com/in/prajwal-padal-48b28a1a7/"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      {/* <div className="footer">
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </div> */}
      <img src="/assets/folded-effect.png" alt="img" />
    </div>
  );
}

export default Contact;
