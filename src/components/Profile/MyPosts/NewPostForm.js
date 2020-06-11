import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../../common/formsControls/formsControls";

const NewPost = (props) => {
    let onSubmit = (formData) => {
        props.addPost(formData.newPost)
        console.log(formData)
    }
    return (
            <ReduxNewPostForm onSubmit={onSubmit}/>
    )
}

let maxLength30=maxLengthCreator(30)

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>New Post</label>
            <Field
                name={'newPost'}
                component={Textarea}
                validate={[required,maxLength30]}
                placeholder={'Пишите свой новый пост здесь'}>
            </Field>
            <button >Send</button>
        </form>
    )
}

let ReduxNewPostForm = reduxForm({form: 'post'})(NewPostForm)
export default NewPost