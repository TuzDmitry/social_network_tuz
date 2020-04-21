import React from "react";
import p from './Profile.module.css';
import ProfilePicture from "./Picture/ProfilePicture";
import ProfileInformation from "./MyInfo/ProfileInformation";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {


    return (
        <div>
            <div className={p.flexContainer}>
                <ProfilePicture/>
                <ProfileInformation/>
                <MyPostsContainer
                    // store={props.store} /////докидываем стор прямо до контейнерной компоненты и только в ней уже начинаем забирать , что нам нужно
                    //- profilePage={props.profilePage}
                    //-      dispatch={props.dispatch}
                />
            </div>
        </div>
    )
};

export default Profile;