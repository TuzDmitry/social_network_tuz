const ADD_POST = 'ADD-POST';
const UPADATE_NEW_POST_TEXT = 'UPADATE-NEW-POST-TEXT';

let initialState = {
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const upDateNewPostTextActionCreator = (text) => ({type: UPADATE_NEW_POST_TEXT, newText: text})


export default profileReducer;