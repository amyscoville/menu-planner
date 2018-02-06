import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import recipes from './recipes';

export default createStore(combineReducers({ recipes }), applyMiddleware(thunk));