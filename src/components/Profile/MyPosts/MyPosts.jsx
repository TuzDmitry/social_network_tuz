import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPostForm";


const MyPosts = (props) => {

    let postsElements = props.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)


    // let onAddPost = () => {
    //     props.addPost()
    // }
    //

    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <div className='new_post'>
                <NewPost addPost={props.addPost}/>
                {/*<label>New Post</label>*/}
                {/*<textarea*/}
                {/*    value={props.newPostText}*/}
                {/*    placeholder={'Пишите свой новый пост здесь'}*/}
                {/*    onChange={onChangePost}*/}
                {/*    className={pb.textarea_new_post}>*/}
                {/*</textarea>*/}
                {/*<button onClick={onAddPost}>Send</button>*/}
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;