import  {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import toggleReducers from "./Toggle/toggleReducer";


const store = createStore(toggleReducers,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;