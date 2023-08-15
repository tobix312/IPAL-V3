import React from "react";
import "./Hero.css";

const Hero = ({imageSrc}) => {
    
    return <div className="Hero">
        <img src={imageSrc} alt="IPAL" className="Hero_image"/>
        <h1 className="Hero_Title">International Peer Assisted Learning</h1> 
    </div>;
};

export default Hero