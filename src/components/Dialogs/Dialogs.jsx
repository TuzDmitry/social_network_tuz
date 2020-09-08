import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessageForm";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id}
                                                                                name={dialog.name}
                                                                                id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map((text) => <Message key={text.id}
                                                                             message={text.message}/>)

    return (
        <div className={'block-wrapper-container'}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.block_conversation}>
                    <div className={s.messages}>{messagesElements}</div>
                    <div className={s.sendingMessageBlock}>
                        <NewMessage addMessage={props.addMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;