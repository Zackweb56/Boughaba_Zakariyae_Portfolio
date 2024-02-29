import React from "react";
// import Button from '../../components/Button/Button';
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import { FaDownload } from "react-icons/fa6";
import Coding from "../../assets/herop1.svg";
// import { saveAs } from 'file-saver';
import my_cv_english from "../../assets/my_cv_english.pdf";
import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import "./Hero.css";
import AnimationSections from "../../AnimationSections/AnimationSections";

function Hero() {
  return (
    <AnimationSections>
      <div className="bubbles_container">
        <ul className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span> */}
        </ul>
      </div>
      <div className="container-md">
        <div id="Hero">
          <div className="hero_container">
            <div className="information">
              <h1>
                Hello, <span style={{ color: "var(--main-color)" }}>I'm</span>{" "}
                <br /> BOUGHABA ZAKARIA <br />{" "}
                <span className="gradient_text">A Full stack developer</span>
              </h1>
              <p>
                {" "}
                I am a highly skilled full-stack developer proficient in both
                front-end and back-end development. I have the ability to create
                dynamic and user-friendly web applications with exceptional
                features.
              </p>
              <div className="btn">
                {/* <Button title="Download CV" link={my_cv_english} download="my_cv_english" icon={} /> */}
                <div id="button">
                  <a
                    href={my_cv_english}
                    download="my_cv_english"
                    className="link"
                  >
                    <div className="button">
                      Download CV &nbsp;
                      <span className="shift">
                        <FaDownload />
                      </span>
                      <div className="mask"></div>
                    </div>
                  </a>
                </div>
              </div>
              <SocialIcons />
            </div>
            <div className="Hero_image">
              <div className="skills_icons">
                <div className="icon react_icon">
                  <FaReact />
                </div>
                <div className="icon css_icon">
                  <FaCss3Alt />
                </div>
                <div className="icon js_icon">
                  <IoLogoJavascript />
                </div>
                <div className="icon laravel_icon">
                  <FaLaravel />
                </div>
                <div className="icon wp_icon">
                  <FaWordpress />
                </div>
              </div>
              <img src={Coding} className="img-fluid" alt="Hero image" />
            </div>
          </div>
        </div>
      </div>
    </AnimationSections>
  );
}

export default Hero;
