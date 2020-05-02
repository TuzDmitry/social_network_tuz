import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar
                // state={props.state.navbarBlock}
            />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                                                              // store={props.store}
                                                              //- dialogsPage={props.state.dialogsPage}
                                                              //- dispatch={props.dispatch}
                />}/>

                <Route path='/profile' render={() => <Profile
                                                               // store={props.store}
                    /////докидываем стор прямо до контейнерной компоненты и только в ней уже начинаем забирать , что нам нужно
                                                              //- profilePage={props.state.profilePage}
                                                              //- dispatch={props.dispatch}
                />}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
