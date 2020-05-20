import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";


// const addPostActionCreator=()=>{
//     return {type: 'ADD-POST'}
// }
//
// const upDateNewPostTextActionCreator=(text)=>{
//     return {type: 'UPADATE-NEW-POST-TEXT', newText:text}
// }

const MyPosts = (props) => {

    let postsElements = props.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)


    let onAddPost = () => {
        props.addPost()
        // props.dispatch({type: 'ADD-POST'})
        // let action=addPostActionCreator()
        // props.dispatch(action)
    }

    let onChangePost = (e) => {
        let text=e.currentTarget.value;
        props.UpDatePostArea(text)  ///1)старый вызов метода для действия на изменение вводимого поля для поста
        // let action = {type: 'UPADATE-NEW-POST-TEXT', newText:text};   ////2) для диспача
        // let action=upDateNewPostTextActionCreator(text)  ///3) через ACtionCreator-функцию которая находится в стейт
        // props.dispatch(action);
    }

    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <div className='new_post'>
                <label>New Post</label>
                <textarea
                    value={props.newPostText}
                    placeholder={'Пишите свой новый пост здесь'}
                    onChange={onChangePost}
                    className={pb.textarea_new_post}>
                </textarea>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;