import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.profilePage.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)


    // let newTitleRef = React.createRef();////////////////////////////временно закоменчен


    let addPost = () => {
        // props.addPost()
        props.dispatch({type: 'ADD-POST'})
    }

    let onChangePost = (e) => {
        let text=e.currentTarget.value;
        // props.UpDatePostArea(text)
        let action = {type: 'UPADATE-NEW-POST-TEXT', newText:text};
        props.dispatch(action);
        // debugger;
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