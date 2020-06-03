import React from "react";
import p from './Profile.module.css';
import ProfilePicture from "./Picture/ProfilePicture";
import ProfileInformation from "./MyInfo/ProfileInformation";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader";


const Profile = (props) => {

if (!props.profile){
    return <Preloader/>
}
else { return (
    <div>
        <div className={p.flexContainer}>
            <ProfilePicture/>
            <ProfileInformation status={props.status}
                                UpDateProfileStatus={props.UpDateProfileStatus}
                                profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    </div>
)}

};

export default Profile;