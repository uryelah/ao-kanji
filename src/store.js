import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { subscriptionsReducer as subscriptions } from "./reducers/subscription";

const reducer = combineReducers({state: subscriptions, kanjis: []});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;