import React from "react";
import pb from './Profile_posts_block.module.css';



const Profile_posts_block=()=> {
    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <form className='new_post'>
                <label for='area_post'>New Post</label>
                <textarea className={pb.textarea_new_post} type="text" id='area_post'>Write new post...</textarea>
                <button type={"submit"}>Send</button>
            </form>
            <div className='posts'>
                <div className='item'>Post1</div>
                <div className='item'>Post2</div>
            </div>
        </div>
    )
};

export default Profile_posts_block;