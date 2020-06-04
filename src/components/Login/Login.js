import React from "react";
import {Field, reduxForm} from "redux-form";

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
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>remember me
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