import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header=(props)=> {
    // debugger
    let aaaa=props.loginData
    return (
        <header className={h.header}>
            <img src="https://i.pinimg.com/originals/8e/8e/5d/8e8e5d3e0b38ecd0688082625bbf1591.png" alt="fdsfd"/>

            <div className={h.loginBlock}>
                {props.loginData.isAuth?props.loginData.login:<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;