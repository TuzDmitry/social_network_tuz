const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPADATE_NEW_MESSAGE_TEXT = 'UPADATE-NEW-MESSAGE-TEXT';

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

    switch (action.type) {
        case ADD_MESSAGE:
            // debugger
            if (action.textMessage) {
                return {
                    ...state,
                    messages: [...state.messages, {message: action.textMessage, id:Math.floor(Math.random()*100)}],
                }
            }



        // case UPADATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.newText
        //     }
        default:
            return state;
    }
}


export const addMessageActionCreator = (textMessage) => ({type: ADD_MESSAGE, textMessage})
// export const upDateNewMessageTextActionCreator = (text) => ({type: UPADATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer;