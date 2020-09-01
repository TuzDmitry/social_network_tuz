import {profileAPI} from "../api/api";

const ADD_POST = 'social_network/profileReducer/ADD-POST';
const DELETE_POST = 'social_network/profileReducer/DELETE_POST';
const SET_USER_PROFILE = 'social_network/profileReducer/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'social_network/profileReducer/SET_PROFILE_STATUS'
const UPDATE_PROFILE_STATUS = 'social_network/profileReducer/UPDATE_PROFILE_STATUS'
const SET_PROFILE_PHOTO = 'social_network/profileReducer/SET_PROFILE_PHOTO'

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

        case DELETE_POST:
            return {...state, posts: state.posts.filter(el => el.id !== action.id)}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_PROFILE_STATUS:
            return {...state, status: action.statusText}

        case UPDATE_PROFILE_STATUS:
            return {...state, status: action.newStatusText}
        case SET_PROFILE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}
//Action Creators
export const addPostActionCreator = (textPost) => ({type: ADD_POST, textPost})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfilePhotoSuccess = (photos) => ({type: SET_PROFILE_PHOTO, photos})


export const setProfileStatusAC = (statusText) => ({type: SET_PROFILE_STATUS, statusText})

export const UpDateProfileStatusAC = (newStatusText) => ({type: UPDATE_PROFILE_STATUS, newStatusText})

export const deletePostAC = (id) => ({type: DELETE_POST, id})


///THUNKи

export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileStatus(userId)
        if (response.status == 200) {
            dispatch(setProfileStatusAC(response.data))
        }
    }
}


export const UpDateProfileStatus = (newStatusText) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfileStatus(newStatusText)
        if (response.data.resultCode == 0) {
            dispatch(UpDateProfileStatusAC(newStatusText))
        }
    }
}
export const sendPhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.uploadProfilePhoto(file)
        if (response.data.resultCode == 0) {
            dispatch(setProfilePhotoSuccess(response.data.photos))
        }
    }
}

export default profileReducer;