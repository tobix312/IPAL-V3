import React from "react";
import "./Navbar.css";
import {FiX, FiMenu} from "react-icons/fi"

const navbarLinks = [{
    url:"./home", title: "home"
}]
const navbar = ({navbarLinks}) => {
    return <nav className="navbar">
        <span className="navbar-IPAL">IPAL</span>
        <ul className="navbar-list">
            {navbarLinks.map(item => {
            return (<li className="navbar-item"> key={item.title}
                <a className="navbar-link" href={item.url}>
                    {item.title}
                </a>
            </li>
            )
        })}</ul>
    </nav>;
};

export default navbar;