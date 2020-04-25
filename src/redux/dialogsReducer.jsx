const ADD_MESSAGE = 'ADD-MESSAGE';
const UPADATE_NEW_MESSAGE_TEXT = 'UPADATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {name: 'Dima', id: '1'},
        {name: 'Tanya', id: '2'},
        {name: 'Dasha', id: '3'},
        {name: 'Kolya', id: '4'},
        {name: 'Gora', id: '5'},
        {name: 'Pahsa', id: '6'},
    ],
    messages: [
        {id: '1', message: 'Hey'},
        {id: '2', message: 'How u?'},
        {id: '3', message: 'Hafanana'}
    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== "") {
                let newMessageText=state.newMessageText
                return {
                    ...state,
                    messages: [...state.messages, {message: newMessageText, id:15}],
                    newMessageText: ""
                }
            }
        // return stateCopy;

        // case ADD_MESSAGE:
        //     if (stateCopy.newMessageText !== "") {
        //         let newMessage = {message: stateCopy.newMessageText};
        // stateCopy.messages=[...state.messages]
        //         stateCopy.messages.push(newMessage);
        //         stateCopy.newMessageText = ""
        //     }
        //     return stateCopy;

        case UPADATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const upDateNewMessageTextActionCreator = (text) => ({type: UPADATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer;