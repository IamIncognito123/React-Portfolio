import React from "react";
import './App.css'

// pages
import About from "./components/pages/About";
import Contact from "./components/pages/Contact"
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";

const App = () => {
    return (
        <div className="portfolio-app">
            <NavBar/>
            <Routes>                
                <Route path="/React-Portfolio" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Portfolio" element={<Portfolio/>}></Route>
                <Route path="/Resume" element={<Resume/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App;