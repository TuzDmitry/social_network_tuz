import React from "react";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
///обертка для чистой ,презентационной компоненты
////работает со store и снабжает нашу презентационную компоненту которую оборачивает и передает нужные пропсы

const MyPostsContainer = (props) => {
let state=props.store.getState();
    let addPost = () => {
        let action=addPostActionCreator()
        // props.dispatch(action)
        props.store.dispatch(action)
    }

    let onChangePost = (text) => {
        let action=upDateNewPostTextActionCreator(text)
        // props.dispatch(action);
        props.store.dispatch(action)
    }

    return (
        <MyPosts UpDatePostArea={onChangePost} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
};

export default MyPostsContainer;