import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./footer.scss";

const Footer = () => (
  <div id="footer-container">
    <div className="footer-text">
      <span><a href="/terms" target="_blank">Terms & conditions</a></span>
      <span> - </span>
      <span><a href="privacy" target="_blank">Privacy policy</a></span>
    </div>
    <div className="footer-text">
      <span>Stackless LLC - HARKLE ROAD STE 100 530-B, SANTA FE. NEW MEXICO, USA.</span>
    </div>

  </div>
)

export default Footer;
