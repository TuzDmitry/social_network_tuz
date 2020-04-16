const ADD_POST = 'ADD-POST';
const UPADATE_NEW_POST_TEXT = 'UPADATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== "") {
                let newPost = {id: 5, message: state.newPostText, likesCount: 0}
                state.posts.push(newPost)
                state.newPostText = ""
            }
            return state;
        case UPADATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const upDateNewPostTextActionCreator = (text) => ({type: UPADATE_NEW_POST_TEXT, newText: text})


export default profileReducer;