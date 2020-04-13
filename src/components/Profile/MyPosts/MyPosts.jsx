import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/state";

// const addPostActionCreator=()=>{
//     return {type: 'ADD-POST'}
// }
//
// const upDateNewPostTextActionCreator=(text)=>{
//     return {type: 'UPADATE-NEW-POST-TEXT', newText:text}
// }

const MyPosts = (props) => {


    let postsElements = props.profilePage.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)


    // let newTitleRef = React.createRef();////////////////////////////временно закоменчен


    let addPost = () => {
        // props.addPost()
        // props.dispatch({type: 'ADD-POST'})
        let action=addPostActionCreator()
        props.dispatch(action)
    }

    let onChangePost = (e) => {
        let text=e.currentTarget.value;
        // props.UpDatePostArea(text)  ///1)старый вызов метода для действия на изменение вводимого поля для поста
        // let action = {type: 'UPADATE-NEW-POST-TEXT', newText:text};   ////2) для диспача
        let action=upDateNewPostTextActionCreator(text)  ///3) через ACtionCreator-функцию которая находится в стейт
        props.dispatch(action);
    }

    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <div className='new_post'>
                <label>New Post</label>
                <textarea
                    // ref={newTitleRef}     /////////////////////////////временно закоменчен
                    value={props.profilePage.newPostText}
                    placeholder={'Пишите свой новый пост здесь'}
                    onChange={onChangePost}
                    className={pb.textarea_new_post}>

                </textarea>
                <button onClick={addPost}>Send</button>
            </div>
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