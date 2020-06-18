import {setUserDataThunk} from "./authReducer";

export const SET_INITIALIZED_SUCCESS = "social_network/Reducer/SET_INITIALIZED_SUCCESS"

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZED_SUCCESS:
            // debugger
            return {
                ...state,
                initialized:true
            };

        default:
            return state;
    }
}

///AC
export const setInitializedSuccess = () => ({
    type: SET_INITIALIZED_SUCCESS
})

///TC
export const Initializing = () => {
    return (dispatch) => {
        let promise=dispatch(setUserDataThunk())
        promise.then(()=>{
            // debugger
            dispatch(setInitializedSuccess())
        })
    }
}

export default appReducer;