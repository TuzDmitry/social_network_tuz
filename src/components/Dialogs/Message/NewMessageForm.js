import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/formsControls/formsControls";

const NewMessage = (props) => {
    let onSubmit=(formData)=>{
        console.log(formData.message)
        props.addMessage(formData.message)
    }
    return (
        <ReduxNewMessageForm onSubmit={onSubmit}/>
    )
}

let maxLength30=maxLengthCreator(30)

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Напишите что-нибудь'}
                       component={Textarea}
                       validate={[required,maxLength30]}
                       name={'message'}
                ></Field>
            </div>
            <button>Отправить</button>
        </form>
    )
}

const ReduxNewMessageForm = reduxForm({form: 'message'})(NewMessageForm)

export default NewMessage