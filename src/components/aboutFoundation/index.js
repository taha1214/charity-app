import React from "react";
import  AboutPic  from"../../asssts/pics/aboutPic.jpg";
import "./About.css";
const AboutFoundation = () => {
    return(
        <div className="a-container">
            <div className="a-boxes">
                <p className="green">about our foundation</p>
                <h3>We Are In A Mission To Help Helpless</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore 
                et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.</p>
                <br/>
                <p>Lorem ipvsum dolor sit amext, consectetur adipisicing
                     elit, smod tempor incididunt ut labore et dolore.</p>
                     <button className="don">about us</button>
            </div>

            <div className="a-pic"><img className="a-image"  src={AboutPic} alt="hope for children's"></img></div>
        </div>
    )
}
export default AboutFoundation;