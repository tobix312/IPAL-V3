import React, { useState } from "react";
import "./Navbar.css";
import {FiX, FiMenu} from "react-icons/fi"

const navbarLinks = [{
    url:"./home", title: "home"
}]
const Navbar = ({navbarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(null);

    const toggleMenuClick = () => {
      setMenuClicked(!menuClicked);
    };
  

    return <nav className="navbar">
        <span className="navbar-IPAL">IPAL</span>

        {menuClicked ?(
             <FiX size={25} className="navebar-menu" onClick={toggleMenuClick}/>
             ) :(
                <FiMenu size={25} className="navebar-menu" onClick={toggleMenuClick}/>
             )}
        
        
        

        <ul className= {menuClicked ? "navbar-list" : "navbar-list navbar-list-active" }>
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

export default Navbar;