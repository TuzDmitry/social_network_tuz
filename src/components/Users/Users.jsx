import React from "react";
import User from "./User/User";
import style from "./Users.module.css"

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={style.title}>Users</div>
            <div>
                {pages.map(el => {
                    return <span onClick={() => props.onPageChanged(el)}
                                 className={props.currentPage === el && style.selectedPage}>{el}</span>
                })}

            </div>
            <div className={style.usersContainer}>{props.users.map(user => <User user={user}
                                                                                 awaitingResponse={props.awaitingResponse}
                                                                                 follow={props.follow}
                                                                                 unfollow={props.unfollow}/>)}</div>
        </div>
    )
}
export default Users;