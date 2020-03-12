import React from "react";
import p from './Profile.module.css';
import Profile_picture from "./Picture/Profile_picture";
import Profile_information from "./MyInfo/Profile_information";
import MyPosts from "./MyPosts/MyPosts";

const Profile=()=> {
    return (
        <div className={p.content}>
            <div className={p.flexContainer}>
                <Profile_picture />
                <Profile_information />
                <MyPosts />
            </div>
        </div>
    )
};

export default Profile;