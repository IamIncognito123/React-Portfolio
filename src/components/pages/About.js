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
                    work at a biotech company in Irvine, handling high throughput workflow for sample extractions of
                    nucleic acids utilizing automation. In my free time I took a FullStack web development bootcamp
                    offered by UC Irvine to learn a new skillset in a growing field. I am always looking for ways to 
                    improve and build upon my current skills.
                </p>
            </div>

        </div>
    )
}