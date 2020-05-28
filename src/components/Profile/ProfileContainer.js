import React from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

// import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 7393
        // debugger
        // profileAPI.getProfile(userId)
        //     .then((response) => {
        //         // debugger;
        //         this.props.setUserProfile(response.data)
        //     });

        this.props.getProfile(userId)
    }

    render() {
        // debugger
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }

}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent)