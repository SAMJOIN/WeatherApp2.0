import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer'


let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;