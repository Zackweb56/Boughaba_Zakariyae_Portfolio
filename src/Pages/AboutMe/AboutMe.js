import React from 'react'
import './AboutMe.css'
import MyEducation from './MyEducation/MyEducation'
import MyExperience from './MyExperience/MyExperience'
// import Titles from '../../components/Titles/Titles'
import AboutMe_img from '../../assets/about_img.jpg'
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages'
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage'
import AnimationSections from '../../AnimationSections/AnimationSections'; 
import Profile from './Profile/Profile'

export default function AboutMe() {
  return (
    <AnimationSections>
      <FirstSectionOfPages title="More Information" logo={AboutMe_img} />
      <div className="container">
        <Profile />
        <MyEducation />
        <div className="my-5">
          <MyExperience />
        </div>
      </div>
      <MoveToNextPage move_title="Services" move_link="/Services" />
    </AnimationSections>
  );
}
