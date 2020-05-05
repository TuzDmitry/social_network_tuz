import React from "react";
import style from "./User.module.css"
import ava from "../../../assets/images/universalAvatar.jpg"
let User = (props) => {
    // let followed= (props.user.followed)? "Follow": "Unfollow";

    return (
        <div className={style.user}>
            <div className={style.avaAndFollow}>
                <img className={style.ava} src={props.user.photos.small!= null? props.user.photos.small : ava} alt="photo"/>
                {!props.user.followed && <button className={style.btn} onClick={()=>props.follow(props.user.id)}>Follow</button>}
                {props.user.followed && <button className={style.btn} onClick={()=>props.unfollow(props.user.id)}>Unfollow</button>}
                {/*<button className={style.btn} onClick={()=>props.unfollow(props.user.id)}>Unfollow</button>*/}
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