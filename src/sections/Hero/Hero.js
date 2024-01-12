import React from 'react'
// import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { FaDownload } from "react-icons/fa6";
import Coding from '../../assets/Programmer.png';
// import { saveAs } from 'file-saver';
import my_cv_english from '../../assets/my_cv_english.pdf';
import './Hero.css'

function Hero() {
    return (
    <>
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
        <div className='container-md'>
            <div id="Hero">
                <div className="hero_container">
                    <div className="information">
                        <h1>
                            Hello, <span style={{color:'var(--main-color)'}}>I'm</span> <br /> BOUGHABA ZAKARIA <br /> A Full stack developer
                        </h1>
                        <p> I am a highly skilled full-stack developer proficient in both front-end and back-end development. I have the ability to create dynamic and user-friendly web applications with exceptional features.</p>
                        <div className="btn">
                            {/* <Button title="Download CV" link={my_cv_english} download="my_cv_english" icon={} /> */}
                            <div id='button'>
                                <a href={my_cv_english} download="my_cv_english" className="link">
                                <div className="button">
                                    Download CV &nbsp;
                                    <span className="shift"><FaDownload /></span>
                                    <div className="mask"></div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <SocialIcons />
                    </div>
                    <div className="Hero_image">
                        <img src={Coding} className="img-fluid" alt="Hero image" />
                    </div>
                </div>
            </div>
        </div>
    </>

  );
}

export default Hero