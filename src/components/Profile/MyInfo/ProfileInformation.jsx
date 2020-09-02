import React from "react";
import pi from './ProfileInformation.module.css';
import ProfileStatus from "../ProfileStatusHOOK";
import plugAva from '../../../assets/images/templateAvatar.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInformation = ({profile, status, UpDateProfileStatus, isOwner, sendPhoto, ...props}) => {
let {photo,...restData}=profile

    let onMainPhotoSelected = (e) => {
        console.log(e.target.files[0])
        sendPhoto(e.target.files[0])
    }

    const sendForm = (formData) => {
        props.saveProfile(formData)
        console.log(formData)
    }

    return (
        <div className={pi.profAva}>
            <div><img src={profile.photos.large || plugAva} className={pi.mainPhoto} alt="NO_photo"/>
                <div>{isOwner && <input type="file" onChange={onMainPhotoSelected}/>}</div>
            </div>
            <ProfileStatus status={status} UpDateProfileStatus={UpDateProfileStatus}/>
            {props.editMode ?
                <ProfileDataForm profile={restData}
                                 initialValues={restData}
                                 onSubmit={sendForm}/>
                :
                <ProfileData isOwner={isOwner} chanheProfileEditMode={props.chanheProfileEditMode} profile={profile}/>
            }
        </div>
    )
};


const ProfileData = (props) => {
    let {fullName, aboutMe, contacts, lookingForAJob, lookingForAJobDescription} = props.profile
    return (
        <div className={pi.person_information}>
            {props.isOwner && <button onClick={() => props.chanheProfileEditMode(true)}>Edit</button>}
            <h2>{fullName} <br/></h2>
            <div>
                <h3>About me:</h3>
                <span>{aboutMe}</span>
            </div>
            <div>
                <h3>My contacts:</h3>
                {Object.keys(contacts).map(key => <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>)}

            </div>
            <div>
                Looking for a job- <input type="checkbox" checked={lookingForAJob}/>
            </div>
            {lookingForAJob && <div>
                Description: <div>{lookingForAJobDescription}</div>
            </div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}: </b>{contactValue}</div>
    )
}

export default ProfileInformation;