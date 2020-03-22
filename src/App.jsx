import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    /////////проверка прокидывания пропсов в консоли...////////////
    console.log(props.dialogs);
    console.log(props.messages);
    console.log(props.posts);
    console.log('пропсы в апп');
    // let dialogs1=props.dialogs//////
    return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} />}/>
                <Route path='/profile' render={()=><Profile state={props.state.profilePage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;
