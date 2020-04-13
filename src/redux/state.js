/////закинули наши стейт и методы в объект
//// _data - означает что это для приватного использования
const ADD_POST='ADD-POST';
const UPADATE_NEW_POST_TEXT='UPADATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPADATE_NEW_MESSAGE_TEXT = 'UPADATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'This is post1', likesCount: '21'},
                {id: '2', message: 'This is post2', likesCount: '24'},
                {id: '3', message: 'This is post3', likesCount: '4'},
                {id: '4', message: 'This is post4', likesCount: '12'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        navbarBlock: {
            friends: [
                {id: '1', name: 'Andrey'},
                {id: '1', name: 'Sasha'},
                {id: '1', name: 'Sveta'}
            ]
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    /////создали +экспортировали ф-ю которая после вызова педала нам в параметрах ф-ю перерисовки дерева.
    subscribe(observer) {
        /////////перезаписали значение переменной (ф-и пустышки) на ф-ю перерисовки дерева
        this._callSubscriber = observer;
    },

    addPost() {
        if (this._state.profilePage.newPostText !== "") {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber();
        }
    },
    UpDatePostArea(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber();
    },
    addMessage() {
        if (this._state.dialogsPage.newMessageText !== "") {
            let newMessage = {message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber();
        }
    },
    UpDateMessageArea(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber();
    },

    dispatch(action){//{type: 'ADD-POST', данные которые нам нужны для этого экшена: blabla}
        if(action.type===ADD_POST){
            if (this._state.profilePage.newPostText !== "") {
                let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ""
                this._callSubscriber();
            }
        } else if (action.type===UPADATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type===ADD_MESSAGE){
            if (this._state.dialogsPage.newMessageText !== "") {
                let newMessage = {message: this._state.dialogsPage.newMessageText};
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = ""
                this._callSubscriber();
            }
        } else if (action.type===UPADATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator=()=>({type: ADD_POST})
export const upDateNewPostTextActionCreator=(text)=>({type: UPADATE_NEW_POST_TEXT, newText:text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const upDateNewMessageTextActionCreator = (text) => ({type: UPADATE_NEW_MESSAGE_TEXT, newText:text})

export default store;