import React from "react";
import p from './Profile.module.css';
import ProfilePicture from "./Picture/ProfilePicture";
import ProfileInformation from "./MyInfo/ProfileInformation";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader";


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={p.flexContainer}>
                    <ProfilePicture/>
                    <ProfileInformation status={props.status}
                                        isOwner={props.isOwner}
                                        UpDateProfileStatus={props.UpDateProfileStatus}
                                        sendPhoto={props.sendPhoto}
                                        profile={props.profile}
                                        saveProfile={props.saveProfile}
                                        chanheProfileEditMode={props.chanheProfileEditMode}
                                        editMode={props.editMode}/>

                    <MyPostsContainer
                    />
                </div>
            </div>
        )
    }

};

export default Profile;