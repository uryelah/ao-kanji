import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import subscriptionsReducer from './reducers/subscription';

const reducer = combineReducers({ state: subscriptionsReducer, kanjis: [] });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
