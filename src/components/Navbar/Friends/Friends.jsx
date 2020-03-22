import React from "react";
import eff from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends=(props)=> {
    let friendsElements=props.state.friends.map((friend)=><Friend name={friend.name} id={friend.id}/>)

    return (
        <div className={eff.friendsblock}>
            <div>Friends</div>
            <div className={eff.container}>{friendsElements}</div>
        </div>
    )
}

export default Friends;