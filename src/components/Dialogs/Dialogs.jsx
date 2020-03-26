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

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map((text) => <Message message={text.message}/>)

    let textAreasref = React.createRef();


    let AddMessage = () => {
        let newMessageElement = textAreasref.current.value;
        alert(newMessageElement);
        textAreasref.current.value = "";
    }


    return (
        <div>
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
            <div className={s.dialogsFooter}>
                <div>
                    <textarea ref={textAreasref}></textarea>
                </div>
                <div>
                    <button onClick={AddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;