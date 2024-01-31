import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import {thunk} from 'redux-thunk' 
import { userReducer } from './Reducer/Reducer';
import { Reducererror } from './Reducer/Reducererror';
const rootReducer=combineReducers({userReducer,Reducererror})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(rootReducer,composeEnhancers(

    applyMiddleware(thunk)
  ))