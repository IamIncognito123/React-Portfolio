import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";



export default function PortfolioRender () {
    const [portfolioPage, handlePortfolioPage] = useState('About')

    const renderPortfolioPage = () => {
        if(portfolioPage === 'About'){
            return(
                <About/>
            )
        }
        if(portfolioPage === 'Contact'){
            return(
                <Contact/>
            )
        }
        if(portfolioPage === 'Portfolio'){
            return(
                <Portfolio/>
            )
        }
        if(portfolioPage === 'Resume'){
            return(
                <Resume/>
            )
        }

    }

    return(
        <div>
            <NavBar portfolioPage={portfolioPage} handlePortfolioPage={handlePortfolioPage}/>
            {renderPortfolioPage()}
        </div>
    )

    

}