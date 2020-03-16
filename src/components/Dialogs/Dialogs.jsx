import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

/////////Вынесли Диалоги с Людьми в отдельную Компоненту////
const DialogItem = (prors) => {
    let path = "/dialogs/" + prors.id
    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{prors.name}</NavLink>
    </div>);
}

/////////Вынесли сообщения в отдельную Компоненту////
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Tanya" id="2"/>
                <DialogItem name="Dasha" id="3"/>
                <DialogItem name="Kolya" id="4"/>
                <DialogItem name="Gora" id="5"/>
                <DialogItem name="Pahsa" id="6"/>
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/6">Pasha</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.messages}>
                <Message message="hi"/>
                <Message message="how are u"/>
                <Message message="whats up"/>
                {/*<div className={s.message}>whats up</div>*/}
            </div>
        </div>
    )
}

export default Dialogs;