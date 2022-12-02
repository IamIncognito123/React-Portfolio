import React from "react";

export default function Portfolio () {
    return(
        <div>
            <h1>Portfolio</h1>
            <a href="https://fierce-springs-51003.herokuapp.com/" target="_blank" rel="noreferrer">
                
                <img alt="gamespace" src={process.env.PUBLIC_URL + '/images/gamespace.jpg'} width={300} height={100}/>
            </a>

        </div>
    )
}