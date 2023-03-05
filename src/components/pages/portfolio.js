import React from "react";

export default function Portfolio () {
    return(
        <div className="page">
            <h1 className="title">My Portfolio</h1>

                <div className="portfolio">
                        <div>
                            <a className='portfolio-item portfolio-item-1' href="https://lit-everglades-07230.herokuapp.com/" target="_blank" rel="noreferrer" width={300} height={100}>
                                <a className="project-name" href="https://github.com/jffsun/doggy-daycare" target="_blank" rel="noreferrer">
                                    <h2>Doggy-Daycare</h2>
                                </a>
                            
                            </a>
                        </div>

                        <div>
                            <a className='portfolio-item portfolio-item-2' href="https://fierce-springs-51003.herokuapp.com/" target="_blank" rel="noreferrer" width={300} height={100}>
                                <a className="project-name" href="https://github.com/markkoos/Project-2" target="_blank" rel="noreferrer">
                                    <h2>GameSpace</h2>
                                </a>
                            
                            </a>
                        </div>

                        <div>
                            <a className='portfolio-item portfolio-item-3' href="https://drive.google.com/file/d/1eGrxAzG2MqoSAVsCS2nBGwJXq2aqzhzd/view?usp=sharing" target="_blank" rel="noreferrer" width={300} height={100}>
                                <a className="project-name" href="https://github.com/IamIncognito123/Team-Profile-Generator" target="_blank" rel="noreferrer">
                                    <h2>Team Profile Generator</h2>
                                </a>
                            
                            </a>
                        </div>

                        <div>
                            <a className='portfolio-item portfolio-item-4' href="https://drive.google.com/file/d/1bn2CRU1HWjANYSnFB1Z_RHZb3IBL8Ph3/view" target="_blank" rel="noreferrer" width={300} height={100}>
                                <a className="project-name" href="https://github.com/IamIncognito123/social-networkAPI" target="_blank" rel="noreferrer">
                                    <h2>Social NetworkAPI</h2>
                                </a>
                            
                            </a>
                        </div>

                        <div>
                            <a className='portfolio-item portfolio-item-4' href="https://drive.google.com/file/d/1bn2CRU1HWjANYSnFB1Z_RHZb3IBL8Ph3/view" target="_blank" rel="noreferrer" width={300} height={100}>
                                <a className="project-name" href="https://github.com/IamIncognito123/social-networkAPI" target="_blank" rel="noreferrer">
                                    <h2>Social NetworkAPI</h2>
                                </a>
                            
                            </a>
                        </div>


                </div>
        </div>

    )
}