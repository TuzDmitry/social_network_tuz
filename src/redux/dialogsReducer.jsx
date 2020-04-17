const ADD_MESSAGE = 'ADD-MESSAGE';
const UPADATE_NEW_MESSAGE_TEXT = 'UPADATE-NEW-MESSAGE-TEXT';

let initialState={
    dialogs: [
        {name: 'Dima', id: '1'},
        {name: 'Tanya', id: '2'},
        {name: 'Dasha', id: '3'},
        {name: 'Kolya', id: '4'},
        {name: 'Gora', id: '5'},
        {name: 'Pahsa', id: '6'},
    ],
        messages: [
        {message: 'Hey'},
        {message: 'How u?'},
        {message: 'Hafanana'}
    ],
        newMessageText: ""
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== "") {
                let newMessage = {message: state.newMessageText};
                state.messages.push(newMessage);
                state.newMessageText = ""
            }
            return state;
        case UPADATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const upDateNewMessageTextActionCreator = (text) => ({type: UPADATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer;