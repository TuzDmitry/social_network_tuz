import React from "react";
import eff from './Friend.module.css';

const Friend=(props)=> {

    return (
        <div className={eff.friend}>
            <div className={eff.name}>{props.name}</div>
            <img src="https://biography-live.ru/wp-content/uploads/2019/05/gettyimages-886103824_conor-mcgregor.jpg" alt=""/>
        </div>
    )
}

export default Friend;