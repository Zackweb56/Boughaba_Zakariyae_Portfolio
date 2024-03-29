import React from 'react'
import { FaCalendar } from 'react-icons/fa6'
import './MyEducation.css'
import AnimationSections from "../../../AnimationSections/AnimationSections";

const MyEducation = () => {
  return (
      <AnimationSections>
        <section className="container-md education" id="education">
          <h1 className="heading"> <span> my </span> education : </h1>
          <div className="box-container">
              <div className="box">
                  <div className="content">
                      <span className='span'><FaCalendar /> 2020 - 2021 </span>
                      <h3>LYCEE IBN TOFAIL</h3>
                      <p>High School Diploma, Physical Science</p>
                  </div>
              </div>
              <div className="box">
                  <div className="content">
                      <span className='span'><FaCalendar /> 2021 - 2023 </span>
                      <h3>ISTA NTIC BENI MELLAL</h3>
                      <p>Diploma in Digital Development (full stack option)</p>
                  </div>
              </div>

          </div>
        </section>
      </AnimationSections>
  )
}

export default MyEducation