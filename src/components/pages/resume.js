import React from "react";
import Resume1 from '../../documents/Resume1.pdf';
export default function Resume() {


    return(
        <div className="page">
            <h1 className="title">Resume</h1>
            <div className="resume-page">
                <a href={Resume1} download className="buttonContainer">
                    <button className="resumeButton">
                        <h3>Download Resume</h3>
                    </button>

                </a>
                <div className="resumeSkills">
                    <h3>Front-End</h3>
                        <p>
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>Html</li>
                                <li>CSS</li>
                            </ul>
                        </p>
                    <h3>Back-End</h3>
                    <p>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>REST and GraphQL</li>
                        </ul>
                    </p> 
                </div> 
            </div>
        </div>

    )
}