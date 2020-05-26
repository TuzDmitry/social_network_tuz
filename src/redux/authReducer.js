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
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
}



export const setUserData = (userId,login,email) => ({type: SET_USER_DATA, data:{userId,login,email}})

export const setUserDataThunk=()=>{
    return (dispatch)=>{
        authAPI.getAuth()
            .then((response) => {
                if(response.data.resultCode===0){
                    // debugger
                    let {id,login,email}=response.data.data
                    dispatch(setUserData(id,login,email))
                }
            });
    }
}


export default authReducer;