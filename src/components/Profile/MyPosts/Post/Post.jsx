import React from "react";
// import fdsf from ./Post.module.css';
import post from './Post.module.css';



const Post=(props)=> {
    /////////проверка прокидывания пропсов в консоли...////////////
    console.log(props.message);
    // console.log('проверка в посте')


    return (
        <div className={post.item}>
            <img src="https://i.pinimg.com/736x/8d/a5/48/8da5485220f54aff3bc0c15dbbd7a739.jpg" alt="fds"/>
            {props.message}
            <div>
                <span>likes:{props.likes}</span>
            </div>
        </div>

    )
};

export default Post;