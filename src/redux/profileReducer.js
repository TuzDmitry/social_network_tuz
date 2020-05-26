import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPADATE_NEW_POST_TEXT = 'UPADATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE'

let initialState = {
    profile:null,
    posts: [
        {id: '1', message: 'This is post1', likesCount: '21'},
        {id: '2', message: 'This is post2', likesCount: '24'},
        {id: '3', message: 'This is post3', likesCount: '4'},
        {id: '4', message: 'This is post4', likesCount: '12'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== "") {
                let newPost = {id: 5, message: state.newPostText, likesCount: 0};
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ""
                };
            }

        case UPADATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const upDateNewPostTextActionCreator = (text) => ({type: UPADATE_NEW_POST_TEXT, newText: text})

export const setUserProfile=(profile)=>({type:SET_USER_PROFILE, profile})

export const getProfile=(userId)=>{
    return (dispatch)=>{
        profileAPI.getProfile(userId)
            .then((response) => {
                // debugger;
                dispatch(setUserProfile(response.data))
            });
    }
}


export default profileReducer;