import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

/////////Вынесли Диалоги с Людьми в отдельную Компоненту////
const DialogItem = (prors) => {
    let path = "/dialogs/" + prors.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.pict}
                 src="http://img0.safereactor.cc/pics/post/full/Конор-Макгрегор-США-страны-полиция-5069300.jpeg"
                 alt=""/>
            <NavLink to={path}>

                {prors.name}
            </NavLink>
        </div>);
}

export default DialogItem;