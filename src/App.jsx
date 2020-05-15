import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";




const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar
                // state={props.state.navbarBlock}
            />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                                                              // store={props.store}
                                                              //- dialogsPage={props.state.dialogsPage}
                                                              //- dispatch={props.dispatch}
                />}/>

                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                {/*     :userId-даст нашему withRouter передать в пропсах компоненте информацию, что то идет после : является параметром userId   */}
                {/*     :userId?-даст нашему withRouter --||--, что, то, что идет после : является опциональным параметром userId ...и может не придти  */}

                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
