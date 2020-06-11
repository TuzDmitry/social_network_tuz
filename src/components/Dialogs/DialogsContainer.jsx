import React from "react";
import {addMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withVerificationLogin} from "../../HOC/HOC";
import {compose} from "redux";

////react-redux -позволяет нам забыть про store.getState()/ store.dispatch и пользоваться сразу State/dispatch


let mapStateToProps = (state) => {////MapStateToProps---ф-я превратить стейт в пропсы
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (textMessage) => {
            let action = addMessageActionCreator(textMessage)
            dispatch(action)
        },

    }
}

//1) const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

//2) export const AuthRedirectContainer=(props)=>{
//     if(!props.isAuth) return <Redirect to={"/login"}/>
//     return <Dialogs {...props}/>
// }
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer)


//3) const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withVerificationLogin(Dialogs))


const DialogsContainer =compose(
    connect(mapStateToProps, mapDispatchToProps),
    withVerificationLogin
)(Dialogs)




export default DialogsContainer;