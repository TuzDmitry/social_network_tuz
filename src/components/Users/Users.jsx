import React from "react";
import User from "./User/User";
let Users=(props)=>{
    let a= props.users.map(user=> <User user={user}/>)
    return(
        <div>
            {a}
        </div>
    )
}
export default Users;