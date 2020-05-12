import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        ////в функ-ую компоменту теперь придет массив с юзерами через пропсы под названием users

        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        follow: (userId)=>{
            let action=followAC(userId);
            dispatch(action)
        },
        unfollow: (userId)=>{
            let action=unfollowAC(userId);
            dispatch(action)
        },
        setUsers: (users)=>{
            let action=setUsersAC(users);
            dispatch(action)
        },
        setPage:(currentpage)=>{
            dispatch(setCurrentPageAC(currentpage))
        },
        setTotalUsersCount:(totalcount)=>{
            dispatch(setTotalUsersCountAC(totalcount))
        },
    }
}
// const UsersContainer=connect()(Users)
// export default UsersContainer;
export default connect(mapStateToProps,mapDispatchToProps)(Users);
// const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users);
// export default UsersContainer;
