import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import {Paginator} from "../../common/Paginator/Paginator";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return (
        <div>
            <div className={style.title}>Users</div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div className={style.usersContainer}>{props.users.map(user => <User user={user}
                                                                                 awaitingResponse={props.awaitingResponse}
                                                                                 follow={props.follow}
                                                                                 unfollow={props.unfollow}/>)}</div>
        </div>
    )
}
export default Users;