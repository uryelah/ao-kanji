import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const mockReducer = combineReducers({ state: reducer, group: {} });

const store = createStore(mockReducer, applyMiddleware(thunk));

export default store;
