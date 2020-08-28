import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";


import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Initializing} from "./redux/appReducer";
import Preloader from "./common/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./common/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));


class App extends React.Component {

    componentDidMount() {
        this.props.Initializing()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={withSuspense(<DialogsContainer/>)}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        {/*     :userId-даст нашему withRouter передать в пропсах компоненте информацию, что то идет после : является параметром userId   */}
                        {/*     :userId?-даст нашему withRouter --||--, что, то, что идет после : является опциональным параметром userId ...и может не придти  */}
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>
                    </div>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {Initializing})
)(App);

const AppMainComponent = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppMainComponent