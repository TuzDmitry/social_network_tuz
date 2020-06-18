import React from "react";
import Header from "./Header";
// import * as axios from "axios";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        // debugger
        // this.props.setUserDataThunk()
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


// export default connect(mapStateToProps,{setUserDataThunk,logoutThunk})(HeaderContainer);
export default connect(mapStateToProps,{logoutThunk})(HeaderContainer);


