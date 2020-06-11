import React from "react";
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {
    let onSubmit = (formData) => {
        props.addPost(formData.newPost)
        console.log(formData)
    }
    return (
            <ReduxNewPostForm onSubmit={onSubmit}/>
    )
}


const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>New Post</label>
            <Field
                name={'newPost'} component={'textarea'}
                placeholder={'Пишите свой новый пост здесь'}>
            </Field>
            <button >Send</button>
        </form>
    )
}

let ReduxNewPostForm = reduxForm({form: 'post'})(NewPostForm)
export default NewPost