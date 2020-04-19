import React from "react";
import {addMessageActionCreator, upDateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

/////////ВЫНЕСЛИ В СТЕЙТ И ПОТОМ ЭКСПОРТИРОВАЛИ........
// const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
// const upDateNewMessageTextActionCreator = (text) => ({type: 'UPADATE-NEW-MESSAGE-TEXT', newText:text})

const DialogsContainer = (props) => {
    let state=props.store.getState();

    let addMessage = () => {

        let action=addMessageActionCreator()
        // props.dispatch(action)
        props.store.dispatch(action)
    }

    let onChangeTextArea = (text) => {
        let action=upDateNewMessageTextActionCreator(text)
        // props.dispatch(action)
        props.store.dispatch(action)
    }


    return (
        <Dialogs UpDateMessageArea={onChangeTextArea}
                 dialogsPage={state.dialogsPage}

                 addMessage={addMessage}/>
    )
}

export default DialogsContainer;