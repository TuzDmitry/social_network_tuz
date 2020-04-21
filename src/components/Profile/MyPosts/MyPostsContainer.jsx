import React from "react";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
///обертка для чистой ,презентационной компоненты
////работает со store и снабжает нашу презентационную компоненту которую оборачивает и передает нужные пропсы

const MyPostsContainer = (props) => {
    // let state = props.store.getState();


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    let action = addPostActionCreator()
                    store.dispatch(action)
                }

                let onChangePost = (text) => {
                    let action = upDateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    UpDatePostArea={onChangePost}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;