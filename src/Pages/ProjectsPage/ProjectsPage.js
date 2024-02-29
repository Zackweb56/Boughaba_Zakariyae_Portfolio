import React from "react";
import "./ProjectsPage.css";

import ProjectsPage_img from "../../assets/projects_img.jpg";
import FirstSectionOfPages from "../../components/FirstSectionOfPages/FirstSectionOfPages";
import Projects from "../../sections/Projects/Projects";
import MoveToNextPage from "../../sections/MoveToNextPage/MoveToNextPage";
import AnimationSections from "../../AnimationSections/AnimationSections";

export default function ProjectsPage() {
  return (
    <AnimationSections>
      <FirstSectionOfPages title="My Works" logo={ProjectsPage_img} />
      <div className="container">
        <div className="projects_page">
          <Projects />
        </div>
        <div className="note">
          <h1>There are more projects underway soon...</h1>
        </div>
      </div>
      <MoveToNextPage move_title="Contact" move_link="/Contact" />
    </AnimationSections>
  );
}
