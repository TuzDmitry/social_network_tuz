import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {name: 'Dima', id: '1'},
    {name: 'Tanya', id: '2'},
    {name: 'Dasha', id: '3'},
    {name: 'Kolya', id: '4'},
    {name: 'Gora', id: '5'},
    {name: 'Pahsa', id: '6'},
]

let messagesData = [
    {message: 'Hey'},
    {message: 'How u?'},
    {message: 'Hafanana'}
]

let postsData = [
    {id: '1', message: 'This is post1', likesCount: '21'},
    {id: '2', message: 'This is post2', likesCount: '24'},
    {id: '3', message: 'This is post3', likesCount: '4'},
    {id: '4', message: 'This is post4', likesCount: '12'}
]

ReactDOM.render(<App dialogs={dialogsData} messages={messagesData} posts={postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
