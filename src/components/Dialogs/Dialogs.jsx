import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {name: 'Dima', id: '1'},
        {name: 'Tanya', id: '2'},
        {name: 'Dasha', id: '3'},
        {name: 'Kolya', id: '4'},
        {name: 'Gora', id: '5'},
        {name: 'Pahsa', id: '6'},
    ]
    let messagesData = [
        {message: 'Hey'},
        {message: 'How u?'},
        {message: 'Hafanana'}
    ]

    let dialogsElements=dialogsData.map((dialog)=><DialogItem name={dialog.name}/>)
    let messagesElements=messagesData.map((text)=><Message message={text.message}/>)

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