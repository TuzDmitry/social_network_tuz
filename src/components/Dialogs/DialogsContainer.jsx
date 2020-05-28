import React from "react";
import {addMessageActionCreator, upDateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/////////ВЫНЕСЛИ В СТЕЙТ И ПОТОМ ЭКСПОРТИРОВАЛИ........
// const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
// const upDateNewMessageTextActionCreator = (text) => ({type: 'UPADATE-NEW-MESSAGE-TEXT', newText:text})

// const DialogsContainer = (props) => {
//     //////////////старые действия...........
//     // let state = props.store.getState();
//
//     // let addMessage = () => {
//     //     let action = addMessageActionCreator()
//     //     props.store.dispatch(action)
//     // }
//     //
//     // let onChangeTextArea = (text) => {
//     //     let action = upDateNewMessageTextActionCreator(text)
//     //     props.store.dispatch(action)
//     // }
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addMessage = () => {
//                     let action = addMessageActionCreator()
//                     store.dispatch(action)
//                 }
//
//                 let onChangeTextArea = (text) => {
//                     let action = upDateNewMessageTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return <Dialogs UpDateMessageArea={onChangeTextArea}
//                                 dialogsPage={state.dialogsPage}
//                                 addMessage={addMessage}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

////react-redux -позволяет нам забыть про store.getState()/ store.dispatch и пользоваться сразу State/dispatch
let mapStateToProps = (state) => {////MapStateToProps---ф-я превратить стейт в пропсы
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;