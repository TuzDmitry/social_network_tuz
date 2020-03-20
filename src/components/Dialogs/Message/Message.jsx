import React from "react";
import s from './Message.module.css';

/////////Вынесли сообщения в отдельную Компоненту////
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;