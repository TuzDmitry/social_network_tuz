let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'This is post1', likesCount: '21'},
            {id: '2', message: 'This is post2', likesCount: '24'},
            {id: '3', message: 'This is post3', likesCount: '4'},
            {id: '4', message: 'This is post4', likesCount: '12'}
        ]
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
        ]
    },
    navbarBlock:{
        friends:[
            {id: '1', name:'Andrey'},
            {id: '1', name:'Sasha'},
            {id: '1', name:'Sveta'}
        ]
    }
}

export let addPost=(postMessage)=>{
    debugger;
    let newPost={id: 5, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
}

export default state;