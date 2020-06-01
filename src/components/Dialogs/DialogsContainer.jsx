import React from "react";
import {addMessageActionCreator, upDateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withVerificationLogin} from "../../HOC/HOC";

////react-redux -позволяет нам забыть про store.getState()/ store.dispatch и пользоваться сразу State/dispatch


let mapStateToProps = (state) => {////MapStateToProps---ф-я превратить стейт в пропсы
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action)
        },
        UpDateMessageArea: (text) => {
            let action = upDateNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}
// export const AuthRedirectContainer=(props)=>{
//     if(!props.isAuth) return <Redirect to={"/login"}/>
//     return <Dialogs {...props}/>
// }
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withVerificationLogin(Dialogs))


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;