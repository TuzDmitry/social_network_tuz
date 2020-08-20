import React from "react";
import pb from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPostForm";

const MyPosts = React.memo(props => {
        let postsElements = props.posts.map((post) => <Post message={post.message} likes={post.likesCount}/>)

        return (
            <div className={pb.posts_block}>
                <h2>My Posts</h2>
                <div className='new_post'>
                    <NewPost addPost={props.addPost}/>
                </div>
                <div className='posts'>
                    {postsElements}
                </div>
            </div>
        )
    }
)

export default MyPosts;