/////закинули наши стейт и методы в объект
//// _data - означает что это для приватного использования
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";

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

    // addPost() {
    //     if (this._state.profilePage.newPostText !== "") {
    //         let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
    //         this._state.profilePage.posts.push(newPost)
    //         this._state.profilePage.newPostText = ""
    //         this._callSubscriber();
    //     }
    // },
    // UpDatePostArea(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber();
    // },
    // addMessage() {
    //     if (this._state.dialogsPage.newMessageText !== "") {
    //         let newMessage = {message: this._state.dialogsPage.newMessageText};
    //         this._state.dialogsPage.messages.push(newMessage);
    //         this._state.dialogsPage.newMessageText = ""
    //         this._callSubscriber();
    //     }
    // },
    // UpDateMessageArea(newText) {
    //     this._state.dialogsPage.newMessageText = newText
    //     this._callSubscriber();
    // },

    dispatch(action){//{type: 'ADD-POST', данные которые нам нужны для этого экшена: blabla}
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarBlock=navBarReducer (this._state.navbarBlock, action);
        this._callSubscriber();
    }
}

export default store;