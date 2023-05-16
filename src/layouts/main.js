import React  from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from '../components/navbar/navbar'
import MostPopular from '../components/barChart/mostpopular'
import TopPublishers from '../components/pieChart/piechart'


/**
 * Main React function.
 */
function Main() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="content">
                <Routes>
                    <Route exact path="/mostpopular" element={<MostPopular />}/>
                    <Route exact path="/publishers" element={<TopPublishers />}/>
                </Routes>
            </div>
        </div>
    )
}


export default Main