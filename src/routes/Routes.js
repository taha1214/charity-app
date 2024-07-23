import { Routes as AppRouter, Route } from "react-router-dom"
import Home from "../pages/home/index";
import About from "../pages/about/About";
import Latest from "../pages/latestCause/index";
import SocialEvents from "../pages/socialEvents/index";

import React from 'react';



const Routes = () =>{
    return(
        <AppRouter>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/latestCause" element={<Latest />} />
            <Route path="/socialEvents" element={<SocialEvents />} />
        </AppRouter>
    )
}
export default Routes;