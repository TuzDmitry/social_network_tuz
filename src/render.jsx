import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {addPost, UpDatePostArea} from './redux/state';
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} UpDatePostArea={UpDatePostArea}/>
        </BrowserRouter>, document.getElementById('root'));
}

