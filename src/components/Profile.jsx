import React from "react";
import p from './Profile.module.css';
const Profile=()=> {
    return (
        <div className={p.content}>
            <div className='photo'>
                <img src="https://s1.1zoom.ru/b5050/174/USA_Houses_Evening_Pond_Las_Vegas_532588_2880x1800.jpg" alt="your_photo"/>
            </div>
            <div className='ava'>
                <img src="" alt=""/>
                <div></div>
            </div>
            <div className='posts_block'>MY POSTS
                <div className='new_post'>New Post</div>
                <div className='posts'>
                    <div className={p.item}>Post1</div>
                    <div className={p.item}>Post2</div>
                </div>
            </div>
        </div>
    )
};

export default Profile;