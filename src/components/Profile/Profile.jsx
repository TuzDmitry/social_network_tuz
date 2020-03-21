import React from "react";
import p from './Profile.module.css';
import Profile_picture from "./Picture/Profile_picture";
import Profile_information from "./MyInfo/Profile_information";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    /////////проверка прокидывания пропсов в консоли...////////////
    console.log(props.posts)
    console.log('проверка в профиле')

    return (
        <div>
            <div className={p.flexContainer}>
                <Profile_picture/>
                <Profile_information/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    )
};

export default Profile;