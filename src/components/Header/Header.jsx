import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import cwb_logo from '../../assets/images/CWB.png'


const Header = (props) => {
    // debugger

    return (
        <header className={h.h_wrapper}>
            <div className={h.header}>
                <img src={cwb_logo} alt="fdsfd"/>

                <div className={h.loginBlock}>
                    {props.loginData.isAuth ?
                        // <div className={h.container}>
                        <>

                            <NavLink to={'/profile'}>
                                {props.loginData.userPhotoUrl &&
                                <img src={props.loginData.userPhotoUrl} width={'50px'} height={'50px'} alt="No Photo"/>}
                                {props.loginData.login}</NavLink>
                            <button onClick={props.logoutThunk}>Выйти</button>
                        </>
                        // </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
};

export default Header;