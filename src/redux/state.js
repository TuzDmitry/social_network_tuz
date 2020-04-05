// import {rerenderEntireTree} from "../render";

/////ф-я пустышка
let rerenderEntireTree=()=>{
    console.log('Heeeeyyy');
}
let state = {
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
}

window.state = state

export let addPost = (postMessage) => {
    // debugger;
    if (state.profilePage.newPostText !== "") {
        let newPost = {id: 5, message: postMessage, likesCount: 0}
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ""
        rerenderEntireTree(state);
    }
}

export let UpDatePostArea = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export let AddMessage = (textMessage) => {
    if (state.dialogsPage.newMessageText !== "") {
        let newMessage = {message: textMessage};
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = ""
        rerenderEntireTree(state);
    }
}


export let UpDateMessageArea = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}

/////создали +экспортировали ф-ю которая после вызова педала нам в параметрах ф-ю перерисовки дерева.
export const subscribe=(observer)=>{
    /////////перезаписали значение переменной (ф-и пустышки) на ф-ю перерисовки дерева
    rerenderEntireTree=observer;
}


export default state;