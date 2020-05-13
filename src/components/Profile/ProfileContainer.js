import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                debugger;
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        debugger
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps=(state)=>{
    return(
        state
    )
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)