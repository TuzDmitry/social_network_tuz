import React from "react";
import pi from './ProfileInformation.module.css';
import ProfileStatus from "../ProfileStatusHOOK";
import plugAva from '../../../assets/images/templateAvatar.png'

const ProfileInformation = ({profile: {photos, fullName, aboutMe, contacts, lookingForAJob}, status, UpDateProfileStatus, isOwner, sendPhoto}) => {

    let onMainPhotoSelected = (e) => {
        console.log(e.target.files[0])
        sendPhoto(e.target.files[0])
    }

    return (
        <div className={pi.profAva}>
            <div><img src={photos.large || plugAva} className={pi.mainPhoto} alt="NO_photo"/>
                <div>{isOwner && <input type="file" onChange={onMainPhotoSelected}/>}</div>
            </div>
            <div className={pi.person_information}>
                <h2>{fullName} <br/></h2>
                <ProfileStatus status={status} UpDateProfileStatus={UpDateProfileStatus}/>

                <div>
                    <h3>About me:</h3>
                    <span>{aboutMe}</span>
                </div>
                <div>
                    <h3>My contacts:</h3>
                    <div><b>facebook: </b>{contacts.facebook}</div>
                    <div><b>website: </b>{contacts.website}</div>
                    <div><b>vk:</b> {contacts.vk}</div>
                    <div><b>instagram:</b> {contacts.instagram}</div>
                    <div><b>github:</b> {contacts.github}</div>
                </div>
                <div>
                    Looking for a job???-{lookingForAJob}
                </div>

                <div>Date of Birth:</div>
                <div>Education: BNTU'11</div>
                <div>Web Site: https://it-kamasutra.com</div>
            </div>
        </div>
    )
};

export default ProfileInformation;