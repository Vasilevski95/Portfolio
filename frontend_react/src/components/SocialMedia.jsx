import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Djordje.Vasilevski/"
        >
          <FaFacebookF />
        </a>
        
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/vasilevski50/"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Vasilevski95"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/%C4%91or%C4%91e-vasilevski-3a0082240/"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
