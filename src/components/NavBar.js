import React from "react";

export default function NavBar ({portfolioPage, handlePortfolioPage}) {
    return(
        <ul className="nav nav-tabs">
            <li>
                <h1 className="header-name">Anhvu</h1>
            </li>

            <li className="nav-item items">
                <a
                    href="#about"
                    onClick={()=> handlePortfolioPage('About')}
                    className={portfolioPage === 'About' ? 'nav-link active': 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item items">
                <a
                    href="#contact"
                    onClick={()=> handlePortfolioPage('Contact')}
                    className={portfolioPage === 'Contact' ? 'nav-link active': 'nav-link'}
                >
                    Contact
                </a>
            </li>

            <li className="nav-item items">
                <a
                    href="#portfolio"
                    onClick={()=> handlePortfolioPage('Portfolio')}
                    className={portfolioPage === 'Portfolio' ? 'nav-link active': 'nav-link'}
                >
                    Portfolio
                </a>
            </li>

            <li className="nav-item items">
                <a
                    href="#resume"
                    onClick={()=> handlePortfolioPage('Resume')}
                    className={portfolioPage === 'Resume' ? 'nav-link active': 'nav-link'}
                >
                    Resume
                </a>
            </li>

        </ul>
    )
}