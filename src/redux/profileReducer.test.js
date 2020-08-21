import profileReducer, {addPostActionCreator, deletePostAC} from "./profileReducer";

let state = {
    posts: [
        {id: '1', message: 'This is post1', likesCount: '21'},
        {id: '2', message: 'This is post2', likesCount: '24'},
        {id: '3', message: 'This is post3', likesCount: '4'},
        {id: '4', message: 'This is post4', likesCount: '12'}
    ]
};

test('new post should be added', ()=>{
    let action=addPostActionCreator('testPost')


    let newState=profileReducer(state,action)

    expect(newState.posts.length).toBe(5);
})

test('added post message should be \'testPost\'', ()=>{
    let action=addPostActionCreator('testPost')

    let newState=profileReducer(state,action)

    expect(newState.posts.find(el=>el.message==='testPost').message).toBe('testPost');
})

test('length after deleting should be decremented', ()=>{
    let action=deletePostAC('1')

    let newState=profileReducer(state,action)

    expect(newState.posts.length).toBe(3);
})

test('after deleting with wrong id array will not be changed', ()=>{
    let action=deletePostAC(1)

    let newState=profileReducer(state,action)

    expect(newState.posts.length).toBe(4);
})
