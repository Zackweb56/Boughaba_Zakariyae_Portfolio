import React from "react";
import './GetInTouch.css'

import Logo from '../../assets/pro_logo_yellow.png'
import {Link} from 'react-router-dom';
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
// import SocialIcons from '../SocialIcons/SocialIcons';

export default function GetInTouch() {
  return (
    <>
        <div className="getintouch">  
            <div id="getintouch" className="container d-flex justify-content-between align-items-center">
                <div className="get">
                    <p className="new_logo">New Logo</p>
                    <img src={Logo} width="180px" height="180px" alt="new Logog" />
                    <h3 className="heading_getintouch01">Based In Morocco 🇲🇦</h3>
                    <h1 className="heading_getintouch02">Get In Touch</h1>
                    <div className="hire_me">
                        <Button title="Hire Me" link="/Contact" icon={<FaArrowRightLong />} />
                    </div>
                </div>
                <div className="all_links d-flex">
                    <div>
                        <ul className="web_links">
                            <h1>Links</h1>
                            <li><Link to="/" id='link'>Home</Link></li>
                            <li><Link to="/AboutMe" id='link'>About Me</Link></li>
                            <li><Link to="/Services" id='link'>Services</Link></li>
                            <li><Link to="/Skills" id='link'>Skills</Link></li>
                            <li><Link to="/Contact" id='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div >
                        <ul className="Soft_skills">
                            <h1>Soft Skills</h1>
                            <li>Team spirit</li>
                            <li>Motivation</li>
                            <li>Problem solving</li>
                            <li>HardWorking</li>
                            <li>Communicative</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="social">
                            <h1>Social</h1>
                            <li><a href="https://facebook.com">Facebook</a></li>
                            <li><a href="https://wa.me/qr/OK6FDXMFVZOEE1">Whatsapp</a></li>
                            <li><a href="https://github.com/Zackweb56">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/zakaria-boughaba-447318283">Linkedin</a></li>
                            <li><a href="">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
