import React from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withVerificationLogin} from "../../HOC/HOC";

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
        // if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}



//  const AuthRedirectContainer=(props)=>{
//     if(!props.isAuth) return <Redirect to={"/login"}/>
//     return <ProfileContainer {...props}/>
//  }
// let withUrlDataContainerComponent = withRouter(AuthRedirectContainer)


///создали HOC над ProfileContainer
let AuthRedirectContainer=withVerificationLogin(ProfileContainer)


let withUrlDataContainerComponent = withRouter(AuthRedirectContainer)



// let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent)