import React from "react";
import './Profile.css';
const Profile=()=> {
    return (
        <div className='content'>Main content
            <div className='photo'><img src="https://s1.1zoom.ru/b5050/174/USA_Houses_Evening_Pond_Las_Vegas_532588_2880x1800.jpg"
                                        alt="photo"/>
            </div>
            <div className='ava'>
                <img src="" alt=""/>
            </div>
            <div className='posts'></div>
            <div>MY POSTS
                <div className='new_post'>New Post</div>
                <div className='posts'>
                    <div className='item'>Post1</div>
                    <div className='item'>Post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;