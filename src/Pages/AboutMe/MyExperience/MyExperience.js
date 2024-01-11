import React from 'react'
import Button from '../../../components/Button/Button'
import './MyExperience.css'
// react-icon
import {FaCalendar, FaEye} from 'react-icons/fa6'

const MyExperience = () => {
  return (
    <div>
        <section className="container-md experience" id="experience">
        <h1 className="heading"> <span> my </span> experience : </h1>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'><FaCalendar /> 2023-2024 </span>
                    <h3>INTERNSHIP</h3>
                    <p>INTERNSHIP at SEWS-MAROC in Kenitra<br />
                    <span className='mx-4'>- Develop a MCQ Test Web Application</span></p>
                    {/* <div className="btn">
                    <Button title="View Image" link="#" icon={<FaEye />} />
                    </div> */}
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MyExperience