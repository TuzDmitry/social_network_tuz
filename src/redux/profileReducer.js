import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS'

let initialState = {
    profile: null,
    posts: [
        {id: '1', message: 'This is post1', likesCount: '21'},
        {id: '2', message: 'This is post2', likesCount: '24'},
        {id: '3', message: 'This is post3', likesCount: '4'},
        {id: '4', message: 'This is post4', likesCount: '12'}
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.textPost) {
                let newPost = {
                    id: Math.floor(Math.random() * 100),
                    message: action.textPost,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost]
                };
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_PROFILE_STATUS:
            // debugger
            return {...state, status: action.statusText}

        case UPDATE_PROFILE_STATUS:
            return {...state, status: action.newStatusText}

        default:
            return state;
    }
}

export const addPostActionCreator = (textPost) => ({type: ADD_POST, textPost})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((response) => {
                // debugger;
                dispatch(setUserProfile(response.data))
            });
    }
}

export const setProfileStatusAC = (statusText) => ({type: SET_PROFILE_STATUS, statusText})

///THUNKa
export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(response => {

                if (response.status == 200) {
                    dispatch(setProfileStatusAC(response.data))
                }
            })

    }
}

export const UpDateProfileStatusAC = (newStatusText) => ({type: UPDATE_PROFILE_STATUS, newStatusText})

export const UpDateProfileStatus = (newStatusText) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(newStatusText)
            .then(response => {

                if (response.data.resultCode == 0) {
                    dispatch(UpDateProfileStatusAC(newStatusText))
                    // debugger
                }

            })
    }
}


export default profileReducer;