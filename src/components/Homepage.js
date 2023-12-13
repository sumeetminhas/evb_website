import React from "react";
import backgroundImg from "./background1.jpg";
import "./Homepage.css"

export const Homepage = () => {
    return (
        <div className="container"> 
            <div className="background">
                <img className="background-img" src={backgroundImg} alt="background" />
            </div>
        </div>
    )
}