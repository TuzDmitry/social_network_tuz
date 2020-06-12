import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/formsControls/formsControls";
import {maxLength30, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login=(props)=>{

    let onSubmit=(formData)=>{
        console.log(formData)
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }


    if(props.isAuth) return <Redirect to={"/profile"}/>
    return(
        // <LoginForm/>
        <ReduxLoginForm onSubmit={onSubmit}/>
    )
}



const LoginForm=(props)=>{


    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
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

let mstp=(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

const LoginContainer=connect(mstp,{loginThunk})(Login)

export default LoginContainer;