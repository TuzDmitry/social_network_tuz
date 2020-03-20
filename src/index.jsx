import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let dialogsData = [
//     {name: 'Dima', id: '1'},
//     {name: 'Tanya', id: '2'},
//     {name: 'Dasha', id: '3'},
//     {name: 'Kolya', id: '4'},
//     {name: 'Gora', id: '5'},
//     {name: 'Pahsa', id: '6'},
// ]

ReactDOM.render(<App /*dialogs={dialogsData}*//>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
