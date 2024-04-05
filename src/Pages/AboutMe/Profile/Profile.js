import React from "react";
import "./Profile.css";
import my_photot from "../../../assets/pro_photo.png";
import AnimationSections from "../../../AnimationSections/AnimationSections";
import Titles from "../../../components/Titles/Titles";

export default function Profile() {
  return (
    <AnimationSections>
      <div className="container">
        <div className="profile_content d-flex justify-content-between align-items-center">
          <div className="profile_image">
            <div className="active_circle"></div>
            <img src={my_photot} alt="profile_img" loading="lazy" />
          </div>
          <div className="profile_description">
            <h1>Profile</h1>
            <div className="profile_desc_content">
              <p className="text">
                I got into web development and web design and it quickly became
                my true calling. I constantly like to experiment, discover and
                learn as my professional and personal projects progress. I love
                sharing my skills and knowledge with people who share the same
                passion as me. and also I am passionate about staying up to date
                on the latest technologies. Motivated, dynamic, and adaptable,
                continually pushing myself to new heights of achievement.
              </p>
              <div className="about_information" width="100%">
                <div className="infos_01">
                  <p>
                    <span>age : </span> 20
                  </p>
                  <p>
                    <span>phone : </span> +212-674362291{" "}
                  </p>
                  <p>
                    <span>gender : </span> male
                  </p>
                  <p>
                    <span>country : </span> morocco
                  </p>
                </div>
                <div className="infos_02">
                  <p>
                    <span>email : </span> boughaba.zakariyae@gmail.com
                  </p>
                  <p>
                    <span>languages : </span> Arabic, english, french
                  </p>
                  <p>
                    <span>work : </span> full stack web developer
                  </p>
                  <p>
                    <span>freelance : </span> available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationSections>
  );
}
