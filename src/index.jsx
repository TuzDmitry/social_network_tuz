
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import React from "react";

let state=store.getState();
//////////////Обернули нашу отрисовку дерева в ф-ю
let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 ////store.addPost.bind(store)- означает что мы берем метод из стора который при вызове требует контекст
                 ////поэтому мы должны изспользовать метод bind который как раз и передаст нам этот нужный контест
                 //addPost={store.addPost.bind(store)}
                 //UpDatePostArea={store.UpDatePostArea.bind(store)}
                 //AddMessage={store.addMessage.bind(store)}
                 //UpDateMessageArea={store.UpDateMessageArea.bind(store)}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}
//////отрисовали дерево, передав ф-и стейт (который импортировали из state.js)
rerenderEntireTree();
///////вызвали переданную ф-ю из state.js, передав ей в параметрах ф-ю отрисовки дерева
store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
