import React from "react";
import p from './Profile.module.css';
import ProfilePicture from "./Picture/ProfilePicture";
import ProfileInformation from "./MyInfo/ProfileInformation";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {


    return (
        <div>
            <div className={p.flexContainer}>
                <ProfilePicture/>
                <ProfileInformation/>
                <MyPosts posts={props.state.posts} addPost={props.addPost}/>
            </div>
        </div>
    )
};

export default Profile;