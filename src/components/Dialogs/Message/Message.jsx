import React from "react";
import s from './Message.module.css';

/////////Вынесли сообщения в отдельную Компоненту////
const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.ico}
                 src="http://img0.safereactor.cc/pics/post/full/Конор-Макгрегор-США-страны-полиция-5069300.jpeg"
                 alt=""/>
            {props.message}
        </div>
    )
}

export default Message;