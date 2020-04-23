import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";

//вызов метода combineReducers()даст нашему стейту наши redusers нам нужно понимать объект это, как бы создали стейт{}
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navbarBlock:navBarReducer
});


let store = createStore(reducers);////создали объект store (автоматически имеющие методы getState(),subscribe(observer),dispatch(action))

export default store;