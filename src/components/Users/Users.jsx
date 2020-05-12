import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import * as axios from "axios";

class Users extends React.Component {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        // let aer= new Array(pagesCount).map((el,i)=><span>{i+1}</span>)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        debugger
        return (
            <div>
                <div className={style.title}>Users</div>
                <div>
                    {pages.map(el => {
                            return <span onClick={()=>this.onPageChanged(el)}
                                         className={this.props.currentPage===el&&style.selectedPage}>{el}</span>

                    })}


                    {/*<span>1</span>*/}
                    {/*<span className={style.selectedPage}>2</span>*/}
                    {/*<span>3</span>*/}
                    {/*<span>4</span>*/}
                    {/*<span>5</span>*/}
                </div>
                <button onClick={this.getUsers}>GetUsers</button>
                <div className={style.usersContainer}>{this.props.users.map(user => <User user={user}
                                                                                          follow={this.props.follow}
                                                                                          unfollow={this.props.unfollow}/>)}</div>
            </div>
        );
    }
}

export default Users;