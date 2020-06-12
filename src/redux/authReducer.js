import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
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
    return (dispatch) => {
        authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // debugger
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, login, email,true))
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
                    dispatch(setUserData(null, null, null,false))
                }
            });
    }
}


export default authReducer;