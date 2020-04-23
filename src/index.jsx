import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import React from "react";
import {Provider} from "react-redux";


let state = store.getState();
//////////////Обернули нашу отрисовку дерева в ф-ю
// let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // store={store}
                    // -state={state} //оставили только для навбара
                    //-dispatch={store.dispatch.bind(store)}
                    //--//store.method.bind(store)- означает что мы берем метод из стора который при вызове требует контекст
                    //--//поэтому мы должны изспользовать метод bind который как раз и передаст нам этот нужный контест
                    //--addPost={store.addPost.bind(store)}
                    //--UpDatePostArea={store.UpDatePostArea.bind(store)}
                    //--AddMessage={store.addMessage.bind(store)}
                    //--UpDateMessageArea={store.UpDateMessageArea.bind(store)}
                />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
// }
//////отрисовали дерево, передав ф-и стейт (который импортировали из store.js)
// rerenderEntireTree();
///////вызвали переданную ф-ю из store.js, передав ей в параметрах ф-ю отрисовки дерева
// store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();