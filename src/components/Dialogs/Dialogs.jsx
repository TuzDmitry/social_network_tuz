import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import NewMessage from "./Message/NewMessageForm";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id}
                                                                                name={dialog.name}
                                                                                id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map((text) => <Message key={text.id}
                                                                             message={text.message}/>)

    // let addMessage = () => {
    //     props.addMessage()
    // }

    // let onChangeTextArea = (e) => {
    //     let text = e.currentTarget.value;
    //     props.UpDateMessageArea(text)
    // }


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
                        <NewMessage addMessage={props.addMessage}/>
                        {/*<div>*/}
                        {/*    <textarea placeholder={'Напишите что-нибудь'}*/}
                        {/*              onChange={onChangeTextArea}*/}
                        {/*              value={props.dialogsPage.newMessageText}*/}
                        {/*    ></textarea>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <button onClick={addMessage}>Отправить</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;