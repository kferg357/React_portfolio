//header will go here
import "./styles.css";
import React from "react";
import Hero from "./images/facepic.jpg"


function HeroImage() {
    return (
        <img className="hero" src={Hero} alt="facepic" />


    );
}


export default HeroImage;
