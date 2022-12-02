import React from "react";

export default function Footer () {
    return(
        <div>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <img alt="LinkedInLogo" src={process.env.PUBLIC_URL + '/images/LI-In-Bug.png'} width="70" height="50"/>
            </a>

            <a href="https://github.com/IamIncognito123" target="_blank" rel="noreferrer" >
                <img alt="GithubLogo" src={process.env.PUBLIC_URL + '/images/github.png'}  width="50" height="50"/>
            </a>

            <a href="https://twitter.com/unusual_whales?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer" >
                <img alt="TwitterLogo" src={process.env.PUBLIC_URL + '/images/twitter.png'} width="90" height="50"/>
            </a>
        </div>
    )
}
