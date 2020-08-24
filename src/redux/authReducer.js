import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social_network/authReducer/SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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

///THUNKs

export const setUserDataThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.checkAuth()
        if (response.data.resultCode === 0) {
            debugger
            let {id, login, email} = response.data.data
            dispatch(setUserData(id, login, email, true))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(setUserDataThunk())
        } else {
            //стопаем формочку созд с именем логин, 2м параметром передаем объект в котором передаем проблемные св-ва.
            //_error -общий для всей формы (не для отдельных филдов)
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducer;