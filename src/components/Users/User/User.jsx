import React from "react";
import style from "./User.module.css"
import ava from "../../../assets/images/universalAvatar.jpg"
import {NavLink} from "react-router-dom";

let User = ({user, awaitingResponse, follow, unfollow}) => {
    debugger
    return (
        <div className={style.user}>
            <div className={style.avaAndFollow}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={style.ava}
                         src={user.photos.small != null ? user.photos.small : ava}
                         alt="photo"/>
                </NavLink>
                {!user.followed &&
                <button className={style.btn} disabled={awaitingResponse.some(id => id == user.id)}
                        onClick={() => follow(user.id)}>Follow</button>}
                {user.followed &&
                <button className={style.btn} disabled={awaitingResponse.some(id => id == user.id)}
                        onClick={() => unfollow(user.id)}>Unfollow</button>}
            </div>
            <div className={style.userInfo}>
                <div>{user.name}</div>
                <div className={style.status}>{user.status}</div>
                <div className={style.country}>country: {user.location ? user.location.country : "not defined"}</div>
                <div className={style.city}>city: {user.location ? user.location.city : "not defined"}</div>
            </div>
        </div>
    )
}
export default User;