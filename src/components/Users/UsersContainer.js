import React from "react";
import {connect} from "react-redux";

import {
    changePageUsersTC,
    follow, followUserTC, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsAwaitingResponse,
    toggleIsFetching,
    unfollow, unfollowUserTC
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../../common/Preloader";
// import {usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component {
    ///метод вызывается только один раз
    componentDidMount() {
        console.log('я вмонтировалась -append(jsx to DOM)')
        this.props.getUsers(this.props.currentPage, this.props.pageSize)


        // this.props.toggleIsFetching(true)
        /////вынесли запрос в отдельную фунцию, и теперь обращаемся к ней , передав в параметры нужные данные из пропс
        // usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
        //     .then((data) => {
        //         // debugger;
        //         this.props.toggleIsFetching(false)
        //
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }

    componentWillUnmount() {
        console.log('я отмонтировалась -i will delete(jsx from DOM)')
    }


    onPageChanged = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber)
        //         // this.props.toggleIsFetching(true)
        //         //
        //         // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //         //     .then((data) => {
        //         //         // debugger;
        //         //         this.props.toggleIsFetching(false)
        //         //         this.props.setUsers(data.items)
        //         //     })
        //         // ;
        this.props.changePageUsers(pageNumber, this.props.pageSize)

    }

    onFollowChanged = (userId) => {
        // this.props.toggleIsAwaitingResponse(userId, true)
        // usersAPI.followUser(userId)
        //     .then((data) => {
        //         // debugger
        //         if (data.resultCode == 0) {
        //             this.props.follow(userId)
        //         }
        //         this.props.toggleIsAwaitingResponse(userId, false)
        //     })

        this.props.followUser(userId)
    }

    onUnfollowChanged = (userId) => {
        // // debugger
        // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        // //     {
        // //         withCredentials: true,
        // //         headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"}
        // //     }
        // // )
        // this.props.toggleIsAwaitingResponse(userId, true)
        // usersAPI.unfollowUser(userId)
        //     .then((data) => {
        //         if (data.resultCode == 0) {
        //             this.props.unfollow(userId)
        //         }
        //         this.props.toggleIsAwaitingResponse(userId, false)
        //     })
        this.props.unfollowUser(userId)
    }

    render() {

        console.log('я отрендерилась- пришли новые пропсы')
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        //
        // let pages = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }


        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       awaitingResponse={this.props.awaitingResponse}
                       follow={this.onFollowChanged}
                       unfollow={this.onUnfollowChanged}


                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        ////в функ-ую компоменту теперь придет массив с юзерами через пропсы под названием users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        awaitingResponse: state.usersPage.awaitingResponse
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // follow: (userId) => {
        //     let action = follow(userId);
        //     dispatch(action)
        // },
        // unfollow: (userId) => {
        //     dispatch(unfollow(userId))
        // },
        // setUsers: (users) => {
        //     dispatch(setUsers(users))
        // },
        // setCurrentPage: (currentpage) => {
        //     dispatch(setCurrentPage(currentpage))
        // },
        // setTotalUsersCount: (totalcount) => {
        //     dispatch(setTotalUsersCount(totalcount))
        // },
        // toggleIsFetching: (isFetching) => {
        //     dispatch(toggleIsFetching(isFetching))
        // },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        changePageUsers: (pageNumber, pageSize) => {
            dispatch(changePageUsersTC(pageNumber, pageSize))
        },
        followUser: (userId) => {
            dispatch(followUserTC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserTC(userId))
        }
    }
}

// let mDTP = {
//         follow,
//         unfollow,
//         setUsers,
//         setCurrentPage,
//         setTotalUsersCount,
//         toggleIsFetching
//     }

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

// export default connect(mapStateToProps,
//     {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleIsAwaitingResponse,
//         getUsersThunkCreator})(UsersAPIComponent);
