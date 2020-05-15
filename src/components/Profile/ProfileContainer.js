import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId=this.props.match.params.userId? this.props.match.params.userId:7393
        // debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then((response) => {
                // debugger;
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        // debugger
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps=(state)=>{
    return(
        {profile: state.profilePage.profile}
    )
}

let withUrlDataContainerComponent= withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)