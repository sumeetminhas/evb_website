import React from "react";
import "./ConfirmAge.css";
import confirmAge from "./confirmAge.jpeg";
import { Link } from "react-router-dom";

export const ConfirmAge = () => {
    return (
        <div className="container">
            <div className="confirm-age">
                <img className="confirm-age-background-img" src={confirmAge} alt="background" />
            </div>

            <div className="confirm-age-box">
                <p className="welcome-text"> WELCOME</p>
                <p className="confirm-text"> confirm your age</p>
                <div className="button-box">
                    <Link className="button yes-button" to="/home">YES</Link>
                    {/* <button className="yes-button">YES</button> */}
                    <Link className="button no-button">NO</Link>
                </div>

            </div>
        </div>
    )
}