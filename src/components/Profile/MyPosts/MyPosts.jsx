import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts=()=> {
    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <form className='new_post'>
                <label for='area_post'>New Post</label>
                <textarea className={pb.textarea_new_post} type="text" id='area_post'>Write new post...</textarea>
                <button type={"submit"}>Send</button>
            </form>
            <div className='posts'>
                <Post message='How are u?' likes='5'/>
                <Post message='It is my fisrt post' likes='3'/>
            </div>
        </div>
    )
};

export default MyPosts;