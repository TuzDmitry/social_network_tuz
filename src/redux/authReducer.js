import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            // debugger
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
}


export const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
})

export const setUserDataThunk = () => {
    // debugger
    return (dispatch) => {
        return authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // debugger
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, login, email, true))
                }
            });
    }
}

export const loginThunk = (email, password, rememberMe) => {

    return (dispatch) => {


        authAPI.login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // debugger
                    dispatch(setUserDataThunk())
                } else {
                    debugger
                    //стопаем формочку созд с именем логин, 2м параметром передаем объект в котором передаем проблемные св-ва.
                    //_error -общий для всей формы (не для отдельных филдов)
                    let message=response.data.messages.length>0? response.data.messages[0]:"Some error"
                    dispatch(stopSubmit('login', {_error: message}));
                }
            });
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // debugger
                    dispatch(setUserData(null, null, null, false))
                }
            });
    }
}


export default authReducer;