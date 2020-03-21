import React from "react";
import p from './Profile.module.css';
import ProfilePicture from "./Picture/ProfilePicture";
import ProfileInformation from "./MyInfo/ProfileInformation";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    /////////проверка прокидывания пропсов в консоли...////////////
    console.log(props.posts)
    console.log('проверка в профиле')

    return (
        <div>
            <div className={p.flexContainer}>
                <ProfilePicture/>
                <ProfileInformation/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    )
};

export default Profile;