import React from "react";
import {connect} from "react-redux";

import {
    followUserTC, requestUsers,
    unfollowUserTC
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../../common/Preloader";
import {compose} from "redux";
import {
    getAwaitingResponse,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";



class UsersAPIComponent extends React.Component {
    ///метод вызывается только один раз
    componentDidMount() {
        console.log('я вмонтировалась -append(jsx to DOM)')
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)


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
        this.props.requestUsers(pageNumber, this.props.pageSize)
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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         ////в функ-ую компоменту теперь придет массив с юзерами через пропсы под названием users
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         awaitingResponse: state.usersPage.awaitingResponse
//     }
// }

let mapStateToProps = (state) => {
    return {
        ///получение данных из селекторов
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        awaitingResponse: getAwaitingResponse(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        requestUsers: (currentPage, pageSize) => {
            dispatch(requestUsers(currentPage, pageSize))
        },
        followUser: (userId) => {
            dispatch(followUserTC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserTC(userId))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withVerificationLogin
)(UsersAPIComponent);

// export default connect(mapStateToProps,
//     {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleIsAwaitingResponse,
//         getUsersThunkCreator})(UsersAPIComponent);
