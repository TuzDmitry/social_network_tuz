import React from "react";
import p from './Profile.module.css';
import Profile_picture from "./Profile_picture";
import Profile_information from "./Profile_information";
import Profile_posts_block from "./Profile_posts_block";

const Profile=()=> {
    return (
        <div className={p.content}>
            <div className={p.flexContainer}>
                <Profile_picture />
                <Profile_information />
                <Profile_posts_block />
            </div>
        </div>
    )
};

export default Profile;