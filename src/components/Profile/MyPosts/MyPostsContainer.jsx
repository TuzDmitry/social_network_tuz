import React from "react";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
///обертка для чистой ,презентационной компоненты
////работает со store и снабжает нашу презентационную компоненту которую оборачивает и передает нужные пропсы

// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     let action = addPostActionCreator()
//                     store.dispatch(action)
//                 }
//
//                 let onChangePost = (text) => {
//                     let action = upDateNewPostTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts
//                     UpDatePostArea={onChangePost}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        UpDatePostArea: (text) => {
            let action = upDateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;