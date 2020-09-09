import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social_network/authReducer/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'social_network/authReducer/GET_CAPTCHA_URL_SUCCESS'
const SET_USER_PROFILE_PHOTO = 'social_network/authReducer/SET_USER_PROFILE_PHOTO'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
    userPhotoUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_USER_PROFILE_PHOTO:
            return {...state, userPhotoUrl: action.photoUrl}
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}


const setUserProfilePhoto = (photoUrl) => ({type: SET_USER_PROFILE_PHOTO, photoUrl})

export const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})

///THUNKs

export const setUserDataThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.checkAuth()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data

            let response2 = await profileAPI.getProfile(id)
            let smallPhoto = response2.data.photos.small

            dispatch(setUserProfilePhoto(smallPhoto))
            dispatch(setUserData(id, login, email, true))
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        let res = await securityAPI.getCaptcha()
        const captchaURL = res.data.url
        dispatch(getCaptchaUrlSuccess(captchaURL))
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(setUserDataThunk());
            //если после логинизации все ок, стираем из бизнеса старую капчу
            dispatch(getCaptchaUrlSuccess(null));

        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            } else {
                //стопаем формочку созд с именем логин, 2м параметром передаем объект в котором передаем проблемные св-ва.
                //_error -общий для всей формы (не для отдельных филдов)
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}));
            }
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