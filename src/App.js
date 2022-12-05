import React from "react";
import Footer from "./components/Footer";
import PortfolioRender from "./components/PortfolioRender";
import './App.css'

const App = () => {
    return (
        <div className="portfolio-app">
            <PortfolioRender/>
            <Footer/>
        </div>
    )
}
export default App;