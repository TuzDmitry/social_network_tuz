import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

/////////ВЫНЕСЛИ В СТЕЙТ И ПОТОМ ЭКСПОРТИРОВАЛИ........
// const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
// const upDateNewMessageTextActionCreator = (text) => ({type: 'UPADATE-NEW-MESSAGE-TEXT', newText:text})

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id}
                                                                                name={dialog.name}
                                                                                id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map((text) => <Message key={text.id}
                                                                             message={text.message}/>)

    let addMessage = () => {
        props.addMessage()
        // props.dispatch({type: 'ADD-MESSAGE'})
        // let action=addMessageActionCreator()
        // props.dispatch(action)
    }

    let onChangeTextArea = (e) => {
        let text = e.currentTarget.value;
        props.UpDateMessageArea(text)
        // props.dispatch({type: 'UPADATE-NEW-MESSAGE-TEXT', newText:text})
        // let action=upDateNewMessageTextActionCreator(text)
        // props.dispatch(action)
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={s.messages}>
                        {messagesElements}
                    </div>
                    <div className={s.sendingMessageBlock}>
                        <div>
                            <textarea placeholder={'Напишите что-нибудь'}
                                      onChange={onChangeTextArea}
                                      value={props.dialogsPage.newMessageText}
                            ></textarea>
                        </div>
                        <div>
                            <button onClick={addMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;