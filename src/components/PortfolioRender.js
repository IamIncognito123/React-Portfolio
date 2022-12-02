import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";



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

    }

    return(
        <div>
            <NavBar portfolioPage={portfolioPage} handlePortfolioPage={handlePortfolioPage}/>
            {renderPortfolioPage()}
            <Footer/>
        </div>
    )

    

}