import React from "react";

export default function About (){
    return(
        <div className="page">
            <h1 className="title">About Me</h1>
            <div className="about-page">

                <img className="picture" alt="nature" src={process.env.PUBLIC_URL + '/images/unnamed.jpg'} width={300} height={400}/>

                <p className="description">
                    Hi my name is Anhvu, I graduated from UCI with a degree in Chemistry. I originally 
                    planned on attending dental school but realized it wasn't my passion. I currently
                    work at a biotech company and wanted to build my skillset and explore a new space.
                </p>
            </div>

        </div>
    )
}