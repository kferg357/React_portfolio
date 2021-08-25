import "./styles.css";
import React from "react";
import facepic from "./images/facepic.jpg"

function HeaderInfo() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="moreleft"><img className="profile" src={facepic} alt="profile" />
                <div className="headerText">
                    <h1>Hello</h1>
                    My name is Kenneth A. Ferguson <br />
                    I am an innovative and deadline-driven Software Developer with experience in designing and developing user-friendly software applications with vast knowledge of debugging problems. Possesing the craft of launching final products that are polished and deliverable.  <br />
                </div>
            </div>

        </div>
    );
}

export default HeaderInfo;