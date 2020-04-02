import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.profilePage.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)


    // let newTitleRef = React.createRef();////////////////////////////временно закоменчен


    let addPost = () => {
        // debugger;
        // let text = newTitleRef.current.value; ///////////старая строка
        // props.addPost(text)
        props.addPost(props.profilePage.newPostText)
        // newTitleRef.current.value="";   ////////////////////////////временно закоменчен
    }

    let onChangePost = (e) => {
        props.UpDatePostArea(e.currentTarget.value)
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