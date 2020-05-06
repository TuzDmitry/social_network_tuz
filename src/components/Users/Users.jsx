import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import * as axios from "axios";

class Users extends React.Component {
    ///метод вызывается только один раз
    componentDidMount() {
        console.log('я вмонтировалась -append(jsx to DOM)')

        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then((response) => {
            debugger;
            this.props.setUsers(response.data.items)
        });
    }

    componentWillUnmount() {
        console.log('я отмонтировалась -i will delete(jsx from DOM)')
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then((response) => {
                debugger;
                this.props.setUsers(response.data.items)
            });
            // props.setUsers([
            //     {
            //         id: 0,
            //         fullName: 'DmirtyT',
            //         location: {city: 'Minsk', country: 'Belarus'},
            //         status: 'I like swim',
            //         followed: false,
            //         urlAvatar: 'https://www.tapeciarnia.pl/tapety/normalne/25407_david_duchovny_czarny_stroj_ciemne_wlosy.jpg'
            //     },
            //     {
            //         id: 1,
            //         fullName: 'DmirtyK',
            //         location: {city: 'Minsk', country: 'Belarus'},
            //         status: 'I like football',
            //         followed: true,
            //         urlAvatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Conor_McGregor,_UFC_189_World_Tour_London_(2).jpg'
            //     },
            // ])
        }
    }

    render() {
        console.log('я отрендерилась- пришли новые пропсы')
        return (
            <div>
                <div className={style.title}>Users</div>
                <button onClick={this.getUsers}>GetUsers</button>
                <div className={style.usersContainer}>{this.props.users.map(user => <User user={user}
                                                                                          follow={this.props.follow}
                                                                                          unfollow={this.props.unfollow}/>)}</div>
            </div>
        );
    }
}

export default Users;