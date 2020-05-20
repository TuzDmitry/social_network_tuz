import React from "react";
import style from "./User.module.css"
import ava from "../../../assets/images/universalAvatar.jpg"
import {NavLink} from "react-router-dom";

let User = (props) => {
    // let followed= (props.user.followed)? "Follow": "Unfollow";
// debugger
    return (
        <div className={style.user}>
            <div className={style.avaAndFollow}>
                <NavLink to={'/profile/'+ props.user.id}>
                    <img className={style.ava}
                              src={props.user.photos.small != null ? props.user.photos.small : ava}
                              alt="photo"/>
                </NavLink>
                {!props.user.followed &&
                <button className={style.btn} disabled={props.awaitingResponse.some(id=> id==props.user.id)} onClick={() => props.follow(props.user.id)}>Follow</button>}
                {props.user.followed &&
                <button className={style.btn} disabled={props.awaitingResponse.some(id=> id==props.user.id)} onClick={() => props.unfollow(props.user.id)}>Unfollow</button>}
            </div>
            <div className={style.userInfo}>
                <div>{props.user.name}</div>
                <div className={style.status}>{props.user.status}</div>
                <div className={style.country}>{"props.user.location.country"}</div>
                <div className={style.city}>{"props.user.location.city"}</div>
            </div>
        </div>
    )
}
export default User;