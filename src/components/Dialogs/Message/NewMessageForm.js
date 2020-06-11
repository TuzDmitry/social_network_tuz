import React from "react";
import {Field, reduxForm} from "redux-form";

const NewMessage = (props) => {
    let onSubmit=(formData)=>{
        console.log(formData.message)
        props.addMessage(formData.message)
    }
    return (
        <ReduxNewMessageForm onSubmit={onSubmit}/>
    )
}

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Напишите что-нибудь'}
                       component={'textarea'}
                       name={'message'}
                ></Field>
            </div>
            <button>Отправить</button>
        </form>
    )
}

const ReduxNewMessageForm = reduxForm({form: 'message'})(NewMessageForm)

export default NewMessage