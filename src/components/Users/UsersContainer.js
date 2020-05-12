import React from "react";
import {connect} from "react-redux";

import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    ///метод вызывается только один раз
    componentDidMount() {
        console.log('я вмонтировалась -append(jsx to DOM)')

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger;
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
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


    onPageChanged=(el)=>{
        this.props.setPage(el)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger;
                this.props.setUsers(response.data.items)
            });

    }

    render() {

        console.log('я отрендерилась- пришли новые пропсы')
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        //
        // let pages = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }

        debugger
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
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        );
    }
}

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

export default connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);

