import React from "react";
import p from './Profile.module.css';
import Profile_picture from "./Picture/Profile_picture";
import Profile_information from "./MyInfo/Profile_information";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {

    let postsData = [
        {id: '1', message: 'Post1', likesCount: '21'},
        {id: '2', message: 'Post2', likesCount: '24'},
        {id: '3', message: 'Post3', likesCount: '4'},
        {id: '4', message: 'Post4', likesCount: '12'}
    ]


    return (
        <div>
            <div className={p.flexContainer}>
                <Profile_picture/>
                <Profile_information/>
                <MyPosts posts={postsData}/>
            </div>
        </div>
    )
};

export default Profile;