import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../scss/sidebarStyle.scss';

const Sidebar = () => (
    <div className="sidebar">
        <div className="contact">
            <h3>CONTACT</h3>
            <hr className="sidebar_line" />
            <ul>
                <li>
                    <a href="mailto:lazpberry1012@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} fixedWidth/>
                        <span> lazpberry1012@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://maps.app.goo.gl/5qvtu3m7u9amZ4Z3A" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMap} fixedWidth />
                        <span> Seoul, Korea</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ji-yeo/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>
                        <span> linkedin.com/in/ji-yeo</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LuaBerry" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} fixedWidth/>
                        <span> github.com/LuaBerry</span>
                    </a>
                </li>
                <br />
            </ul>
        </div>
        {/* <div className="index">
            <h3>INDEX</h3>
            <hr className="sidebar_line" />
            <ul>
                <li>About Me</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Certification</li>
                <li>Technical Skills</li>
                <li>Language</li>
            </ul>
        </div> */}
    </div>
);

export default Sidebar;