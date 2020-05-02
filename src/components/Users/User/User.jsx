import React from "react";
import style from "./User.module.css"

let User=(props)=>{
    return(
        <div className={style.user}>
            <img className={style.ava} src={props.user.urlAvatar} alt=""/>
            <div className={style.userInfo}>
                <div>{props.user.fullName}</div>
                <div>{props.user.status}</div>
                <div>{props.user.location.country}</div>
                <div>{props.user.location.city}</div>
            </div>

        </div>
    )
}
export default User;