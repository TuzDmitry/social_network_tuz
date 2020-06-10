import React from "react";
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {

    return (
            <ReduxNewPostForm onSubmit={onSubmit}/>
    )
}
let onSubmit = (formData) => {
    console.log(formData)
}

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>New Post</label>
            <Field
                name={'NewPost'} component={'textarea'}
                placeholder={'Пишите свой новый пост здесь'}>
            </Field>
            <button >Send</button>
        </form>
    )
}

let ReduxNewPostForm = reduxForm({form: 'Post'})(NewPostForm)
export default NewPost