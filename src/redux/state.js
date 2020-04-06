/////закинули наши стейт и методы в объект
//// _data - означает что это для приватного использования
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
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
    },
    /////создали +экспортировали ф-ю которая после вызова педала нам в параметрах ф-ю перерисовки дерева.
    subscribe(observer) {
        /////////перезаписали значение переменной (ф-и пустышки) на ф-ю перерисовки дерева
        this._rerenderEntireTree = observer;
    },

    addPost(postMessage) {
        if (this._state.profilePage.newPostText !== "") {
            let newPost = {id: 5, message: postMessage, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._rerenderEntireTree();
        }
    },
    UpDatePostArea(newText) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree();
    },
    AddMessage(textMessage) {
        if (this._state.dialogsPage.newMessageText !== "") {
            let newMessage = {message: textMessage};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ""
            this._rerenderEntireTree();
        }
    },
    UpDateMessageArea(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._rerenderEntireTree();
    }
}

export default store;