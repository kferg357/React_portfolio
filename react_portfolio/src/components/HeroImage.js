//header will go here
import "./styles.css";
import React from "react";
import Hero from "./images/programming-coding.jpg"


function HeroImage() {
    return (
        <img className="hero" src={Hero} alt="coding" />


    );
}


export default HeroImage;
