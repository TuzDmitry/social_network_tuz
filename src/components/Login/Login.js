import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../common/formsControls/formsControls";
import {maxLength30, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from './../../common/formsControls/formsControls.module.css'
import st from './Login.module.css'

const Login = (props) => {

    let onSubmit = (formData) => {
        console.log(formData)
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }


    if (props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/></>
    )
}


const LoginForm = (props) => {


    return (
        <form className={st.loginForm} onSubmit={props.handleSubmit}>
            <div style={{
                boxSizing: "border-box",
                padding: "15px",
                color: "white",
                backgroundColor: "#333",
                marginBottom: "15px",
                borderRadius: "5px"
            }}>
                <div><i>данные тестового аккаунта:</i></div>
                <div>Email: <ins>free@samuraijs.com</ins></div>
                <div>Password: <ins>free</ins></div>
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
            {props.captchaUrl && createField('symbols from image', 'captcha', Input, [required])}

            {createField('Email', 'email', Input, [required, maxLength30], {type: "text"})}
            {createField('Password', 'password', Input, [required, maxLength30], {type: "text"})}
            {createField(null, 'rememberMe', Input, null, {type: "checkbox"}, 'Remember me')}

            {props.error && <div className={style.errorSummary}>
                {props.error}
            </div>}
            <button>Login</button>
        </form>
    )
}
///якобы НОС для нашей формы
const ReduxLoginForm = reduxForm({
    ///уникальное имя для формы
    form: 'login'
})(LoginForm)

let mstp = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const LoginContainer = connect(mstp, {loginThunk: login})(Login)

export default LoginContainer;