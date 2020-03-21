import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    //////////проверка прокидывания пропсов в консоли...////////////
    console.log(props.dialogs);
    console.log('пропсы в диалогах');
    console.log(props.messages);
    ////////////////////////////////////////////////////

    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name}/>)
    let messagesElements = props.messages.map((text) => <Message message={text.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name}/>*/}
                {/*<DialogItem name="Kolya" id="4"/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messagesData[0].name}/>*/}
                {/*<Message message="whats up"/>*/}
                {/*<div className={s.message}>whats up</div>*/}
            </div>
        </div>
    )
}

export default Dialogs;