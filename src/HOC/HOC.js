// Эта функция принимает компонент...
import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


///в ф-ю withVerificationLogin пришел компонет
export const withVerificationLogin=(Component)=> {

///создаем компоненту обертку которая рисует компоненту пришедшую в параметрах на входе
    let AuthRedirectWrapperContainer=(props)=>{
        if(!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let ConnectedAuthRedirectWrapperContainer= connect(mapStateToPropsForRedirect)(AuthRedirectWrapperContainer)



    // ...и возвращает другой компонент...
    return ConnectedAuthRedirectWrapperContainer;
}




