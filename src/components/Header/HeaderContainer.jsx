import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component{

    componentDidMount() {


            // let userId=this.props.match.params.userId? this.props.match.params.userId:7393

        axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`,
            {
                withCredentials: true,
                headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"}
            }
            )
            .then((response) => {
                // debugger;
                // alert(response.data.resultCode)

                if(response.data.resultCode===0){
                    // debugger
                    let {id,login,email}=response.data.data
                    this.props.setUserData(id,login,email)
                }


            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
};

const mapStateToProps=(state)=>{
    return{
        loginData: state.auth
    }
}

// export default HeaderContainer;

export default connect(mapStateToProps,{setUserData})(HeaderContainer);


