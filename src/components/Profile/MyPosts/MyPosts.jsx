import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    /////////проверка прокидывания пропсов в консоли...////////////
    console.log(props.posts)
    console.log('проверка в постах')

    let postsElements = props.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)


    let newTitleRef = React.createRef();



    let addPost = () => {
        let newText = newTitleRef.current.value;
        alert(newText);
    }

    return (
        <div className={pb.posts_block}>
            <h2>My Posts</h2>
            <form className='new_post'>
                <label for='area_post'>New Post</label>
                <textarea ref={newTitleRef} className={pb.textarea_new_post} ></textarea>
                <button onClick={addPost} type={"submit"}>Send</button>
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