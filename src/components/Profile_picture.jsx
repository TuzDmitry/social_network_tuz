import React from "react";
import pp from './Profile_picture.module.css';


const Profile_picture=()=> {
    return (
        <div className={pp.profilePictire}>
            <img src="https://s1.1zoom.ru/b5050/174/USA_Houses_Evening_Pond_Las_Vegas_532588_2880x1800.jpg" alt="header_photo"/>
        </div>
    )
};

export default Profile_picture;