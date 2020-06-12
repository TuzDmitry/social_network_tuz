import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/formsControls/formsControls";
import {maxLength30, required} from "../../utils/validators/validators";

const Login=(props)=>{
    return(
        // <LoginForm/>
        <ReduxLoginForm onSubmit={onSubmit}/>
    )
}

let onSubmit=(formData)=>{
    console.log(formData)
}

const LoginForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[required,maxLength30]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required,maxLength30]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={'rememberMe'}
                       component={Input}/>remember me
            </div>
            <button>Login</button>
        </form>
    )
}
///якобы НОС для нашей формы
const ReduxLoginForm= reduxForm({
    ///уникальное имя для формы
    form: 'login'
})(LoginForm)





export default Login;