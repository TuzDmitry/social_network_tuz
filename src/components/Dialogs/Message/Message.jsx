import React from "react";
import s from './Message.module.css';

/////////Вынесли сообщения в отдельную Компоненту////
const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.ico}
                 src="http://img0.safereactor.cc/pics/post/full/Конор-Макгрегор-США-страны-полиция-5069300.jpeg"
                 alt=""/>
            <div className={s.message_block}>
                <div className={s.header}>
                    <div>Dima</div><div>10:10</div>
                </div>
                <div className={s.text}>{props.message}</div>
            </div>
        </div>
    )
}

export default Message;