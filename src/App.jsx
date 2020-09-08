import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

import {HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Initializing} from "./redux/appReducer";
import Preloader from "./common/Preloader";
import store from "./redux/reduxStore";
import {Title} from "./common/titleComponent";

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

                <div>
                    <HeaderContainer/>
                    <div className="app-wrapper">

                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Suspense fallback={<Preloader/>}>
                                <Route path='/dialogs'
                                       render={() => <Title title={'DIALOGS'}><DialogsContainer/></Title>}/>
                            </Suspense>
                            <Route path='/profile/:userId?'
                                   render={() => <Title title={'PROFILE'}><ProfileContainer/></Title>}/>
                            {/*     :userId-даст нашему withRouter передать в пропсах компоненте информацию, что то идет после : является параметром userId   */}
                            {/*     :userId?-даст нашему withRouter --||--, что, то, что идет после : является опциональным параметром userId ...и может не придти  */}


                            {/*<Route path='/users' render={() => <UsersContainer/>}/>*/}
                            <Route path='/users' render={() => <Title title={'USERS'}><UsersContainer/></Title>}/>
                            {/*<Route path='/news' component={News}/>*/}
                            <Route path='/news' component={() => <Title title={'NEWS'}><News/></Title>}/>
                            <Route path='/music' component={() => <Title title={'MUSIC'}><Music/></Title>}/>
                            <Route path='/settings'
                                   component={() => <Title title={'SETTINGS'}><Settings/></Title>}/>
                            <Route path='/login' component={() => <Title title={'LOGIN'}><Login/></Title>}/>
                        </div>
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default AppMainComponent