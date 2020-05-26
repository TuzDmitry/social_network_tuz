import React from "react";
import Header from "./Header";
// import * as axios from "axios";
import {connect} from "react-redux";
import {setUserDataThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
//      // let userId=this.props.match.params.userId? this.props.match.params.userId:7393

        // authAPI.getAuth()
        //     .then((response) => {
        //         if(response.data.resultCode===0){
        //             // debugger
        //             let {id,login,email}=response.data.data
        //             this.props.setUserData(id,login,email)
        //         }
        //
        //
        //     });
        this.props.setUserDataThunk()
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

export default connect(mapStateToProps,{setUserDataThunk})(HeaderContainer);


