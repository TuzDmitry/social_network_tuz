import React from "react";
import pi from './ProfileInformation.module.css';
import ProfileStatus from "../ProfileStatus";


const ProfileInformation=(props)=> {
    return (
        <div className={pi.profAva}>
            <img src={props.profile.photos.large} alt="NO_photo"/>
            <div className={pi.person_information}>
                <h2>{props.profile.fullName} <br/></h2>
                <ProfileStatus {...props}/>

                <div>
                    <h3>About me:</h3>
                    <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    <h3>My contacts:</h3>
                    <div><b>facebook: </b>{props.profile.contacts.facebook}</div>
                    <div><b>website: </b>{props.profile.contacts.website}</div>
                    <div><b>vk:</b> {props.profile.contacts.vk}</div>
                    <div><b>instagram:</b> {props.profile.contacts.instagram}</div>
                    <div><b>github:</b> {props.profile.contacts.github}</div>
                </div>
                <div>
                    Looking for a job???-{props.profile.lookingForAJob}
                </div>


                <div>Date of Birth: </div>
                <div>Education: BNTU'11</div>
                <div>Web Site: https://it-kamasutra.com</div>
            </div>
        </div>
    )
};

export default ProfileInformation;