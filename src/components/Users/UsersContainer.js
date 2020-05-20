import React from "react";
import {connect} from "react-redux";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {followAPI, usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component {
    ///метод вызывается только один раз
    componentDidMount() {
        console.log('я вмонтировалась -append(jsx to DOM)')
        this.props.toggleIsFetching(true)



        /////вынесли запрос в отдельную фунцию, и теперь обращаемся к ней , передав в параметры нужные данные из пропс
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then((data) => {
                // debugger;
                this.props.toggleIsFetching(false)

                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    componentWillUnmount() {
        console.log('я отмонтировалась -i will delete(jsx from DOM)')
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    //             .then((response) => {
    //             debugger;
    //             this.props.setUsers(response.data.items)
    //         });
    //         // props.setUsers([
    //         //     {
    //         //         id: 0,
    //         //         fullName: 'DmirtyT',
    //         //         location: {city: 'Minsk', country: 'Belarus'},
    //         //         status: 'I like swim',
    //         //         followed: false,
    //         //         urlAvatar: 'https://www.tapeciarnia.pl/tapety/normalne/25407_david_duchovny_czarny_stroj_ciemne_wlosy.jpg'
    //         //     },
    //         //
    //         // ])
    //     }
    // }


    onPageChanged = (el) => {
        this.props.setCurrentPage(el)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(el,this.props.pageSize)
            .then((data) => {
                // debugger;
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
        ;

    }

    onFollowChanged = (userId) => {
        // debugger
        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        //     {},
        //     {
        //         withCredentials: true,
        //         headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"}
        //     }
        // )

        followAPI.followUser(userId)
            .then((data) => {
                // debugger
                if (data.resultCode == 0) {
                    this.props.follow(userId)
                }
            })
    }

    onUnfollowChanged = (userId) => {
        // debugger
        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        //     {
        //         withCredentials: true,
        //         headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"}
        //     }
        // )
        followAPI.unfollowUser(userId)
            .then((data) => {
                if (data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
            })
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
            // <div>
            //     <div className={style.title}>Users</div>
            //     <div>
            //         {pages.map(el => {
            //                 return <span onClick={()=>this.onPageChanged(el)}
            //                              className={this.props.currentPage===el&&style.selectedPage}>{el}</span>
            //         })}
            //
            //         {/*<span>1</span>*/}
            //         {/*<span className={style.selectedPage}>2</span>*/}
            //     </div>
            //     <button onClick={this.getUsers}>GetUsers</button>
            //     <div className={style.usersContainer}>{this.props.users.map(user => <User user={user}
            //                                                                               follow={this.props.follow}
            //                                                                               unfollow={this.props.unfollow}/>)}</div>
            // </div>

            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
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
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             let action = followAC(userId);
//             dispatch(action)
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (currentpage) => {
//             dispatch(setCurrentPageAC(currentpage))
//         },
//         setTotalUsersCount: (totalcount) => {
//             dispatch(setTotalUsersCountAC(totalcount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// let mDTP = {
//         follow,
//         unfollow,
//         setUsers,
//         setCurrentPage,
//         setTotalUsersCount,
//         toggleIsFetching
//     }

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);


