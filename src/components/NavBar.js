import React from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
    return(
        <nav className="nav">
            <h1>Anhvu Nguyen</h1>
            <li className="nav-link">
                <Link 
                    to='/'
                    className="text"
                >
                    About
                </Link>

                <Link 
                    to='/Contact'
                    className="text"
                >
                    Contact
                </Link>

                <Link 
                    to='/Portfolio'
                    className="text"
                >
                    Portfolio
                </Link>
  
                <Link 
                    to='/Resume'
                    className="text"
                >
                    Resume
                </Link>
            </li>

        </nav>
    )
}