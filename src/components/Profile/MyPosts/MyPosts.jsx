import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts=(props)=> {
    let postsData=[
        {id: '1', message:'Post1', likesCount: '21'},
        {id: '2', message:'Post2', likesCount: '24'},
        {id: '3', message:'Post3', likesCount: '4'},
        {id: '4', message:'Post4', likesCount: '12'}
    ]

    let postsElements=postsData.map((post)=><Post message={post.message} likes={post.likesCount}/>)

    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <form className='new_post'>
                <label for='area_post'>New Post</label>
                <textarea className={pb.textarea_new_post} type="text" id='area_post'>Write new post...</textarea>
                <button type={"submit"}>Send</button>
            </form>
            <div className='posts'>
                {postsElements}
                {/*<Post message={postsData[0].containText} likes={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].containText} likes={postsData[1].likesCount}/>*/}
                {/*<Post message='It is my fisrt post' likes='3'/>*/}
            </div>
        </div>
    )
};

export default MyPosts;