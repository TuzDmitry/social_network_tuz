import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

//вызов метода combineReducers()даст нашему стейту наши redusers нам нужно понимать объект это, как бы создали стейт{}
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    navbarBlock:navBarReducer,
    auth:authReducer
});


let store = createStore(reducers);////создали объект store (автоматически имеющие методы getState(),subscribe(observer),dispatch(action))

window.store=store;
export default store;