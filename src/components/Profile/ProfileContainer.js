import React from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, UpDateProfileStatus} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {withVerificationLogin} from "../../HOC/HOC";
import {compose} from "redux";



class ProfileContainer extends React.Component {


    componentDidMount() {
        // debugger

        let userId = this.props.match.params.userId
        if(!userId){
            userId=this.props.userId
            // debugger
            //////и без него работает...
            if(!userId){
                this.props.history.push('/login')
            }
            //////////
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        ///унесли в HOC!!!!
        // if(!this.props.isAuth) return <Redirect to={"/login"}/>
        // debugger
        return (

            <Profile {...this.props}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

///создали HOC над ProfileContainer
// let AuthRedirectContainer=withVerificationLogin(ProfileContainer)
// let withUrlDataContainerComponent = withRouter(AuthRedirectContainer)
// export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent)

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, UpDateProfileStatus}),
    withRouter,
    // withVerificationLogin
)(ProfileContainer)
