import React from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, UpDateProfileStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withVerificationLogin} from "../../HOC/HOC";
import {compose} from "redux";

// import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 7393
        ///унесли в САНКУ!!!!

        // debugger
        // profileAPI.getProfile(userId)
        //     .then((response) => {
        //         // debugger;
        //         this.props.setUserProfile(response.data)
        //     });

        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        ///унесли в HOC!!!!
        // if(!this.props.isAuth) return <Redirect to={"/login"}/>
        // debugger
        return (

            <Profile {...this.props}
                     // profile={this.props.profile}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

///создали HOC над ProfileContainer
// let AuthRedirectContainer=withVerificationLogin(ProfileContainer)
// let withUrlDataContainerComponent = withRouter(AuthRedirectContainer)
// export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent)

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, UpDateProfileStatus}),
    withRouter,
    withVerificationLogin
)(ProfileContainer)
