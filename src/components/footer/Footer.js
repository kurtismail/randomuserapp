import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <span>Design by</span>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "30px", margin: "0  25px 0 10px" }}
      />
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">İsmail K.</code>
      </a>
    </div>
  );
};

export default Footer;
