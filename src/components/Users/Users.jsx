import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import * as axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then((response)=>{
            debugger;
            props.setUsers(response.data.items)});
        // props.setUsers([
        //     {
        //         id: 0,
        //         fullName: 'DmirtyT',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         status: 'I like swim',
        //         followed: false,
        //         urlAvatar: 'https://www.tapeciarnia.pl/tapety/normalne/25407_david_duchovny_czarny_stroj_ciemne_wlosy.jpg'
        //     },
        //     {
        //         id: 1,
        //         fullName: 'DmirtyK',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         status: 'I like football',
        //         followed: true,
        //         urlAvatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Conor_McGregor,_UFC_189_World_Tour_London_(2).jpg'
        //     },
        // ])
    }
    let a = props.users.map(user => <User user={user} follow={props.follow} unfollow={props.unfollow}/>)
    return (
        <div>
            <div className={style.title}>Users</div>
            <div className={style.usersContainer}>{a}</div>
        </div>
    )
}
export default Users;