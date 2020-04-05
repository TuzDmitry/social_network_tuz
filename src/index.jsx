
import * as serviceWorker from './serviceWorker';
import state, {AddMessage, addPost, subscribe, UpDateMessageArea, UpDatePostArea} from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import React from "react";
//////////////Обернули нашу отрисовку дерева в ф-ю
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 UpDatePostArea={UpDatePostArea}
                 AddMessage={AddMessage}
                 UpDateMessageArea={UpDateMessageArea}
            />
        </BrowserRouter>, document.getElementById('root'));
}
//////отрисовали дерево, передав ф-и стейт (который импортировали из state.js)
rerenderEntireTree(state);
///////вызвали переданную ф-ю из state.js, передав ей в параметрах ф-ю отрисовки дерева
subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
