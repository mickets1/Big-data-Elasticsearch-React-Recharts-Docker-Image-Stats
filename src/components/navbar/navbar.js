import React from 'react'
import  { NavLink } from "react-router-dom"


/**
 * Header, navigation bar.
 */
function Navbar() {
    return (
        <div className="navbar">
            <h1>ElasticSearch - Docker Images Data Visualization</h1>
            <ul>
                <li><NavLink to="/mostpopular">Most Popular</NavLink></li>
                <li><NavLink to="/publishers">Top Publishers</NavLink></li>
                
            </ul>
        </div>
    )
}

export default Navbar