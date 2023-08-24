import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo1.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">Type IT </p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://www.linkedin.com/in/shrajan-pandey-a38033200/"
                    rel="noreferrer"
                >
                    Find Me Here
                </a>
            </div>
        </div>
    );
};

export default Nav;
